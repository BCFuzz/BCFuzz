function f0() {
    let v2 = 2147483647;
    const v3 = v2 >>> v2;
    let v4 = v2 - -268435456;
    v4++;
    const v6 = ++v2;
    v6 && v6;
    try {
    const t0 = 128;
    t0(128, v4, v3, v6);
    } catch (e) {}
}
const v12 = new BigUint64Array(124);
v12.sort(f0);
gc();
