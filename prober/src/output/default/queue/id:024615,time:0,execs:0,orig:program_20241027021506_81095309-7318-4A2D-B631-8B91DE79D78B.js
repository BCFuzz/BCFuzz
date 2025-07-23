const v2 = new Int32Array(2);
const o12 = {
    n(a4, a5, a6) {
        a6.subarray();
        const v9 = createGlobalObject();
        v9.Atomics.load(a6);
        return v9;
    },
};
const t9 = o12.n;
t9(Int32Array, o12, v2);
gc();
