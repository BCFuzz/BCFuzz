const v2 = new Int16Array(2504);
const o13 = {
    n(a6, a7, a8) {
        createGlobalObject().Atomics.and(a8, a8, 9223372036854775807n);
        return this;
    },
};
const v14 = o13.n;
try { v14(undefined, v2, v2); } catch (e) {}
gc();
