const v2 = new Uint32Array(8);
const v5 = new Int32Array(2);
const o16 = {
    n(a7, a8, a9) {
        try { a8.n(a7, a7, v2); } catch (e) {}
        a9.subarray(v2, 2);
        return createGlobalObject().Atomics.and(a9);
    },
};
const t9 = o16.n;
t9(Int32Array, o16, v5);
gc();
