function f0() {
    return f0;
}
const v1 = [-4096,-546180325,14589,268435440];
Object.defineProperty(v1, 1, { enumerable: true, get: f0, set: f0 });
new Uint32Array(v1);
gc();
