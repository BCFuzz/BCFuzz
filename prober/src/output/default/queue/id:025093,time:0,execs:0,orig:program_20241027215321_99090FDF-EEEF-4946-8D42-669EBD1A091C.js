function f1() {
    return null;
}
const o11 = {
    n(a3, a4, a5) {
        const v6 = this;
        const t6 = v6.Intl.NumberFormat;
        const v9 = t6();
        v9.constructor(f1, a4);
        return v9;
    },
};
const v12 = o11.n;
v12.useGrouping = null;
v12(f1, v12);
gc();
