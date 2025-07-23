const v3 = new Int32Array(2);
const o12 = {
    n(a5, a6, a7) {
        const v10 = createGlobalObject().Atomics;
        v10.store(v3, v3, -1.7976931348623157e+308);
        return v10;
    },
};
const t8 = o12.n;
t8(v3);
gc();
