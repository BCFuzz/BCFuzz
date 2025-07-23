const v2 = new Int32Array(2);
v2.subarray(2, 2);
const o12 = {
    n(a5, a6, a7) {
        return createGlobalObject().Atomics.add(v2);
    },
};
const v13 = o12.n;
v13(Int32Array, v13);
gc();
