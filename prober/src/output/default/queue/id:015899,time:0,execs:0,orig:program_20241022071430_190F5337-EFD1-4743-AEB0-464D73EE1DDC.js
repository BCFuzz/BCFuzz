const v0 = [-Infinity];
function f1() {
    return "-13";
}
v0.valueOf = f1;
const o12 = {
    n(a4, a5, a6) {
        const v7 = this;
        const t8 = v7.Intl.NumberFormat;
        const v10 = t8();
        return v10.constructor(f1, a5, v10, v10, v10);
    },
};
const v13 = o12.n;
v13(f1, v13).formatToParts(v0);
gc();
