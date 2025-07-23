const v2 = new Int32Array(2);
const o12 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v9 = v7.Intl.NumberFormat;
        v9().format(v2);
        return v9;
    },
};
const t9 = o12.n;
t9(Int32Array, o12, v2, v2);
gc();
