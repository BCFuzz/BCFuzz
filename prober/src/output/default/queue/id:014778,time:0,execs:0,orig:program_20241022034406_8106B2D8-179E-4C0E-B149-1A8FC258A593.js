function f1(a2) {
    return a2;
}
const v3 = f1.prototype;
const o15 = {
    n(a6, a7, a8) {
        const v9 = this;
        const v11 = v9.Intl.NumberFormat;
        const v12 = v11.supportedLocalesOf(v3);
        v11().formatToParts(a8);
        return v12;
    },
};
const v16 = o15.n;
v16(v16, v16, 1000000.0);
v16(-38306575, -38306575, -38306575);
gc();
