const v3 = new Int32Array(2);
const o18 = {
    n(a5, a6, a7) {
        createGlobalObject().Atomics.and(a7);
        const v12 = this;
        const t5 = v12.Intl.NumberFormat;
        const v15 = t5();
        const v16 = v15.format(421);
        v15.format();
        return v16;
    },
};
const t12 = o18.n;
t12(Int32Array, o18, v3);
gc();
