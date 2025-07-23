function f0() {
    let v2 = 2147483647;
    const v3 = v2 >>> v2;
    const v4 = v2 - -268435456;
    const v5 = ++v2;
    v5 && v5;
    try {
    const t0 = 128;
    t0(128, v4, v3, v5);
    } catch (e) {}
    return f0;
}
const v11 = new BigUint64Array(124);
v11.sort(f0);
gc();
