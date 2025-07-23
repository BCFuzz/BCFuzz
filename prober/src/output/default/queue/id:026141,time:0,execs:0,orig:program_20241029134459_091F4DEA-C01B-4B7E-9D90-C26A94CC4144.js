const v1 = new Float64Array(Float64Array);
function f2(a3) {
    return (4294967296n * 4294967296n) % 4294967296n;
}
v1.toString = f2;
const o16 = {
    n(a8, a9, a10) {
        const v11 = this;
        const v13 = v11.Intl.NumberFormat;
        return v13(v13, Float64Array, a8, v13).constructor();
    },
};
const t12 = o16.n;
t12().format(v1);
gc();
