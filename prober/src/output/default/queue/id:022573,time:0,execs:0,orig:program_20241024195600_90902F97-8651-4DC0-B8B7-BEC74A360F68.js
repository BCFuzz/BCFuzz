const v2 = new Int32Array(2);
v2.subarray();
const o12 = {
    n(a5, a6, a7) {
        return createGlobalObject().Atomics.store(a7);
    },
};
const t7 = o12.n;
t7(Int32Array, o12, v2);
gc();
