function f0() {
    [3.0,-0.0,2.1867381749219046];
    const v2 = [8.12511445420267e+307,-2.220446049250313e-16,NaN,-Infinity];
    v2[128] = v2;
    v2[128] = v2;
    v2[65537] = v2;
}
const v5 = new Uint32Array(4046);
v5.reduce(f0);
gc();
