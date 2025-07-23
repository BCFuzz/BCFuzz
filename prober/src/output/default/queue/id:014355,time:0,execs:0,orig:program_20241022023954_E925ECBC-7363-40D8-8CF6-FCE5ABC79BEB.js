function f0() {
    return f0;
}
function f1() {
    const v2 = [8.12511445420267e+307,-2.220446049250313e-16,NaN,-Infinity];
    v2[128] = v2;
    v2[128] = v2;
    v2[128] = f0;
    v2[128] = v2;
    v2[128] = v2;
    v2[65537] = v2;
    return v2;
}
const v5 = new Uint32Array(4046);
v5.reduce(f1);
gc();
