const v2 = new Int32Array(2);
const o11 = {
    n(a4, a5, a6) {
        createGlobalObject().Atomics.store(a6);
        return 2;
    },
};
const t7 = o11.n;
t7(Int32Array, o11, v2);
gc();
