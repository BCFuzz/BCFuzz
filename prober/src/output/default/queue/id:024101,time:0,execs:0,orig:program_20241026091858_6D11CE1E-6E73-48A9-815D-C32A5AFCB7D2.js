const v2 = new Uint32Array(2);
v2.subarray();
const o12 = {
    n(a5, a6, a7) {
        createGlobalObject().Atomics.add(v2);
        return a6;
    },
};
const v13 = o12.n;
v13(v13, Uint32Array, v13);
gc();
