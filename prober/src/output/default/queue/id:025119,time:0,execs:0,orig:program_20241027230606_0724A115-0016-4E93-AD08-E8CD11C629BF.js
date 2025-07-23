function f0() {
    let v2 = 2147483647;
    const v3 = v2 - -268435456;
    const v4 = ++v2;
    try {
    const t0 = 24300;
    t0(24300, v3, -268435456, v3, v2);
    } catch (e) {}
    return v4 / v3;
}
const v10 = new BigUint64Array(124);
v10.sort(f0);
gc();
