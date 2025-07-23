const v2 = new Int32Array();
function f3(a4) {
    return 1730066143n;
}
v2[Symbol.toPrimitive] = f3;
const o16 = {
    n(a8, a9, a10) {
        const v11 = this;
        const t8 = v11.Intl.NumberFormat;
        return t8().format(v2);
    },
};
const t12 = o16.n;
t12();
gc();
