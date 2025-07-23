const v1 = [2.0];
function f2(a3, a4) {
    return 0.021656384052068822;
}
v1[Symbol.toPrimitive] = f2;
const o16 = {
    n(a8, a9, a10) {
        const v11 = this;
        const t8 = v11.Intl.NumberFormat;
        t8().format(v1);
        return v1;
    },
};
const v17 = o16.n;
v17(v1, v17, f2);
gc();
