const v2 = new Uint16Array(1024);
const o12 = {
    [undefined](a5, a6, a7) {
        createGlobalObject().Atomics.load(v2);
    },
};
o12.undefined();
gc();
