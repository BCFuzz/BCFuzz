// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#include <assert.h>
#include <errno.h>
#include <fcntl.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>

#if !defined(_WIN32)
#include <sys/mman.h>
#include <sys/time.h>
#include <sys/types.h>
#endif

// `unistd.h` is the Unix Standard header.  It is available on all unices.
// macOS wishes to be treated as a unix platform though does not claim to be
// one.
#if defined(__unix__) || (defined(__APPLE__) && defined(__MACH__))
#include <unistd.h>
#endif

#include "libcoverage.h"

#define unlikely(cond) __builtin_expect(!!(cond), 0)

#define SHM_SIZE 0x100000
#define mySize 4096
#define MAX_EDGES ((SHM_SIZE - 4) * 8)
static_assert(MAX_EDGES <= UINT32_MAX, "Edges must be addressable using a 32-bit index");

static inline int edge(const uint8_t* bits, uint64_t index)
{
    return (bits[index / 8] >> (index % 8)) & 0x1;
}

static inline void set_edge(uint8_t* bits, uint64_t index)
{
    bits[index / 8] |= 1 << (index % 8);
}

static inline void clear_edge(uint8_t* bits, uint64_t index)
{
    bits[index / 8] &= ~(1u << (index % 8));
}

int cov_initialize(struct cov_context* context)
{
#if defined(_WIN32)
    char key[1024];
    _snprintf(key, sizeof(key), "shm_id_%u_%u",
              GetCurrentProcessId(), context->id);
    context->hMapping =
            CreateFileMappingA(INVALID_HANDLE_VALUE, NULL, PAGE_READWRITE, 0,
                               SHM_SIZE, key);
    if (!context->hMapping) {
        fprintf(stderr, "[LibCoverage] unable to create file mapping: %lu",
                GetLastError());
        return -1;
    }

    context->shmem =
            MapViewOfFile(context->hMapping, FILE_MAP_ALL_ACCESS, 0, 0, SHM_SIZE);
    if (!context->shmem) {
        CloseHandle(context->hMapping);
        context->hMapping = INVALID_HANDLE_VALUE;
        return -1;
    }
#else
    char shm_key[1024];
    char shm_key3[1024];
    char shm_key4[1024];
    snprintf(shm_key, 1024, "shm_id_%d_%d", getpid(), context->id);
    snprintf(shm_key3, 1024, "shm_id_%d_%d_3", getpid(), context->id);
    snprintf(shm_key4, 1024, "shm_id_%d_%d_4", getpid(), context->id);

    int fd = shm_open(shm_key, O_RDWR | O_CREAT, S_IREAD | S_IWRITE);
    int fd3 = shm_open(shm_key3, O_RDWR | O_CREAT, S_IREAD | S_IWRITE);
    int fd4 = shm_open(shm_key4, O_RDWR | O_CREAT, S_IREAD | S_IWRITE);

    if (fd <= -1 || fd3 <= -1 || fd4 <= -1) {
        fprintf(stderr, "[LibCoverage] Failed to create shared memory region\n");
        return -1;
    }
    ftruncate(fd, SHM_SIZE);
    ftruncate(fd3, mySize);
    ftruncate(fd4, mySize*4);
    context->shmem = mmap(0, SHM_SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
    context->shmem_ir = mmap(0, mySize, PROT_READ | PROT_WRITE, MAP_SHARED, fd3, 0);
    context->shmem_line = mmap(0, mySize*4, PROT_READ | PROT_WRITE, MAP_SHARED, fd4, 0);
    close(fd);
    close(fd3);
    close(fd4);
#endif
    return 0;
}

void cov_finish_initialization(struct cov_context* context, int should_track_edges)
{
    uint32_t num_edges = context->shmem->num_edges;
    if (num_edges == 0) {
        fprintf(stderr, "[LibCoverage] Coverage bitmap size could not be determined, is the engine instrumentation working properly?\n");
        exit(-1);
    }

    // Llvm's sanitizer coverage ignores edges whose guard is zero, and our instrumentation stores the bitmap indices in the guard values.
    // To keep the coverage instrumentation as simple as possible, we simply start indexing edges at one and thus ignore the zeroth edge.
    num_edges += 1;

    if (num_edges > MAX_EDGES) {
        fprintf(stderr, "[LibCoverage] Too many edges\n");
        exit(-1);           // TODO
    }

    // Compute the bitmap size in bytes required for the given number of edges and
    // make sure that the allocation size is rounded up to the next 8-byte boundary.
    // We need this because evaluate iterates over the bitmap in 8-byte words.
    uint32_t bitmap_size = (num_edges + 7) / 8;
    bitmap_size += (7 - ((bitmap_size - 1) % 8));

    context->num_edges = num_edges;
    context->num_edges_ir = (mySize>>2) * 8;
    context->bitmap_size = bitmap_size;
    context->bitmap_size_ir = mySize>>2;
    context->bitmap_size_line = (mySize*4) >> 1;

    context->should_track_edges = should_track_edges;

    context->virgin_bits = malloc(bitmap_size);
    context->virgin_bits_ir = malloc(context->bitmap_size_ir);
    context->crash_bits = malloc(bitmap_size);

    memset(context->virgin_bits, 0xff, bitmap_size);
    memset(context->virgin_bits_ir, 0xff, context->bitmap_size_ir);
    memset(context->crash_bits, 0xff, bitmap_size);

    if (should_track_edges) {
        context->edge_count = malloc(sizeof(uint32_t) * num_edges);
        memset(context->edge_count, 0, sizeof(uint32_t) * num_edges);
    } else {
        context->edge_count = NULL;
    }
    context->ir_count = malloc(sizeof(uint32_t) * context->num_edges_ir);
    memset(context->ir_count, 0, sizeof(uint32_t) * context->num_edges_ir);

    // Zeroth edge is ignored, see above.
    clear_edge(context->virgin_bits, 0);
    clear_edge(context->crash_bits, 0);
}

void cov_shutdown(struct cov_context* context)
{
#if defined(_WIN32)
    (void)UnmapViewOfFile(context->shmem);
    CloseHandle(context->hMapping);
#else
    char shm_key[1024];
    char shm_key3[1024];
    char shm_key4[1024];
    snprintf(shm_key, 1024, "shm_id_%d_%d", getpid(), context->id);
    snprintf(shm_key3, 1024, "shm_id_%d_%d_3", getpid(), context->id);
    snprintf(shm_key4, 1024, "shm_id_%d_%d_4", getpid(), context->id);
    shm_unlink(shm_key);
    shm_unlink(shm_key3);
    shm_unlink(shm_key4);
#endif
}

static uint32_t internal_evaluate(struct cov_context* context, uint8_t* virgin_bits, struct edge_set* new_edges, struct edge_set* new_edges2)
{
    uint64_t* current = (uint64_t*)context->shmem->edges;
    uint64_t* end = (uint64_t*)(context->shmem->edges + context->bitmap_size);
    uint64_t* virgin = (uint64_t*)virgin_bits;
    new_edges->count = 0;
    new_edges->edge_indices = NULL;
    new_edges2->count = 0;
    new_edges2->edge_indices = NULL;

    // Perform the initial pass regardless of the setting for tracking how often invidual edges are hit
    while (current < end) {
        if (*current && unlikely(*current & *virgin)) {
            // New edge(s) found!
            // We know that we have <= UINT32_MAX edges, so every index can safely be truncated to 32 bits.
            uint32_t index = (uint32_t)((uintptr_t)current - (uintptr_t)context->shmem->edges) * 8;
            for (uint32_t i = index; i < index + 64; i++) {
                if (edge(context->shmem->edges, i) == 1 && edge(virgin_bits, i) == 1) {
                    clear_edge(virgin_bits, i);
                    new_edges->count += 1;
                    new_edges2->count += 1;
                    size_t new_num_entries = new_edges->count;
                    new_edges->edge_indices = realloc(new_edges->edge_indices, new_num_entries * sizeof(uint64_t));
                    new_edges2->edge_indices = realloc(new_edges2->edge_indices, new_num_entries * sizeof(uint64_t));
                    new_edges->edge_indices[new_edges->count - 1] = i;
                    new_edges2->edge_indices[new_edges2->count - 1] = i;
                }
            }
        }

        current++;
        virgin++;
    }

    // Perform a second pass to update edge counts, if the corpus manager requires it.
    // This is in a separate block to increase readability, with a negligible performance penalty in practice,
    // as this pass takes 10-20x as long as the first pass
    if (context->should_track_edges) {
        current = (uint64_t*)context->shmem->edges;
        while (current < end) {
            uint64_t index = ((uintptr_t)current - (uintptr_t)context->shmem->edges) * 8;
            for (uint64_t i = index; i < index + 64; i++) {
                if (edge(context->shmem->edges, i) == 1) {
                    context->edge_count[i]++;
                }
            }
            current++;
        }
    } 
    return new_edges->count;
}


static uint32_t internal_evaluate2(struct cov_context* context, uint8_t* virgin_bits, struct edge_set* new_edges)
{
    uint64_t* current = (uint64_t*)context->shmem_ir->edges;
    uint64_t* end = (uint64_t*)(context->shmem_ir->edges + context->bitmap_size_ir);
    uint64_t* virgin = (uint64_t*)virgin_bits;
    new_edges->count = 0;
    new_edges->edge_indices = NULL;

    // Perform the initial pass regardless of the setting for tracking how often invidual edges are hit
    while (current < end) {
        if (*current && unlikely(*current & *virgin)) {
            // New edge(s) found!
            // We know that we have <= UINT32_MAX edges, so every index can safely be truncated to 32 bits.
            uint32_t index = (uint32_t)((uintptr_t)current - (uintptr_t)context->shmem_ir->edges) * 8;
            for (uint32_t i = index; i < index + 64; i++) {
                if (edge(context->shmem_ir->edges, i) == 1 && edge(virgin_bits, i) == 1) {
                    clear_edge(virgin_bits, i);
                    new_edges->count += 1;
                    size_t new_num_entries = new_edges->count;
                    new_edges->edge_indices = realloc(new_edges->edge_indices, new_num_entries * sizeof(uint64_t));
                    new_edges->edge_indices[new_edges->count - 1] = i;
                }
            }
        }

        current++;
        virgin++;
    }

    // Perform a second pass to update edge counts, if the corpus manager requires it.
    // This is in a separate block to increase readability, with a negligible performance penalty in practice,
    // as this pass takes 10-20x as long as the first pass
    
    current = (uint64_t*)context->shmem_ir->edges;
    while (current < end) {
        uint64_t index = ((uintptr_t)current - (uintptr_t)context->shmem_ir->edges) * 8;
        for (uint64_t i = index; i < index + 64; i++) {
            if (edge(context->shmem_ir->edges, i) == 1) {
                context->ir_count[i]++;
            }
        }
        current++;
    }
    
    return new_edges->count;
}


int cov_evaluate(struct cov_context* context, struct edge_set* new_edges, struct edge_set* new_edges2)
{
    uint32_t num_new_edges = internal_evaluate(context, context->virgin_bits, new_edges, new_edges2);
    // TODO found_edges should also include crash bits
    context->found_edges += num_new_edges;
    return num_new_edges > 0;
}

int cov_evaluate2(struct cov_context* context, struct edge_set* new_edges)
{
    //printf("Before evaluate2\n");
    uint32_t num_new_edges = internal_evaluate2(context, context->virgin_bits_ir, new_edges);
    // TODO found_edges should also include crash bits
    // context->found_edges += num_new_edges;
    //printf("After evaluate2\n");
    context->found_irs += num_new_edges;
    return num_new_edges > 0;
}

int cov_evaluate_crash(struct cov_context* context)
{
    struct edge_set new_edges;
    struct edge_set new_edges2;
    uint32_t num_new_edges = internal_evaluate(context, context->crash_bits, &new_edges, &new_edges2);
    free(new_edges.edge_indices);
    free(new_edges2.edge_indices);
    return num_new_edges > 0;
}

int cov_compare_equal(struct cov_context* context, uint32_t* edges, uint32_t num_edges)
{
    for (int i = 0; i < num_edges; i++) {
        int idx = edges[i];
        if (edge(context->shmem->edges, idx) == 0)
            return 0;
    }

    return 1;
}

//int ir_compare_equal(struct cov_context* context, uint32_t* edges, uint32_t num_edges)
int ir_compare_equal(struct cov_context* context,  uint32_t edge_id)
{
    /*
    for (int i = 0; i < num_edges; i++) {
        int idx = edges[i];
        if (edge(context->shmem_ir->edges, idx) == 0)
            return 0;
    }
    return 1;
    */
    
    if (edge(context->shmem_ir->edges, edge_id) == 0)
    {
        return 0;
    }
    return 1;
}


void cov_clear_bitmap(struct cov_context* context)
{
    memset(context->shmem->edges, 0, context->bitmap_size);
    memset(context->shmem_ir->edges, 0, context->bitmap_size_ir);
    memset(context->shmem_line->lines, 0, context->bitmap_size_line);
}

int cov_get_edge_counts(struct cov_context* context, struct edge_counts* edges)
{
    if(!context->should_track_edges) {
        return -1;
    }
    edges->edge_hit_count = context->edge_count;
    edges->count = context->num_edges;
    return 0;
}

int ir_get_edge_counts(struct cov_context* context, struct edge_counts* edges)
{

    edges->edge_hit_count = context->ir_count;
    edges->count = context->num_edges_ir;
    return 0;
}

int get_op_line(struct cov_context* context, uint32_t index)
{
    return context->shmem_line->lines[index];
}

void cov_clear_edge_data(struct cov_context* context, uint32_t index)
{
    if (context->should_track_edges) {
        assert(context->edge_count[index]);
        context->edge_count[index] = 0;
    }
    context->found_edges -= 1;
    assert(!edge(context->virgin_bits, index));
    set_edge(context->virgin_bits, index);
}

void ir_clear_edge_data(struct cov_context* context, uint32_t index)
{    
    context->found_irs -= 1;
    assert(!edge(context->virgin_bits_ir, index));
    set_edge(context->virgin_bits_ir, index);
}

void cov_reset_state(struct cov_context* context) {
    memset(context->virgin_bits, 0xff, context->bitmap_size);
    memset(context->virgin_bits_ir, 0xff, context->bitmap_size_ir);
    memset(context->crash_bits, 0xff, context->bitmap_size);

    if (context->edge_count != NULL) {
        memset(context->edge_count, 0, sizeof(uint32_t) * context->num_edges);
    }

    if (context->ir_count != NULL) {
        memset(context->ir_count, 0, sizeof(uint32_t) * context->num_edges_ir);
    }

    // Zeroth edge is ignored, see above.
    clear_edge(context->virgin_bits, 0);
    clear_edge(context->crash_bits, 0);

    context->found_edges = 0;
    context->found_irs = 0;
}

