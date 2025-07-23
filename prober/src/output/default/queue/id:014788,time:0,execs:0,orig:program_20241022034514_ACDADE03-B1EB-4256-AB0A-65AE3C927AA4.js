const v2 = new Int32Array(33);
const o12 = {
    [undefined](a5, a6, a7) {
        createGlobalObject().Atomics.load(v2);
    },
};
o12.undefined();
gc();
