const v3 = new Int8Array(6);
const o13 = {
    n(a6, a7, a8) {
        return createGlobalObject().Atomics.and(a8, a8, 9223372036854775807n);
    },
};
const v14 = o13.n;
try { v14(Float64Array, v3, v3); } catch (e) {}
gc();
