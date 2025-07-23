function f0() {
    let v2 = 2147483647;
    const v3 = v2 - -268435456;
    return ++v2 / v3;
}
const v8 = new BigUint64Array(124);
v8.sort(f0);
gc();
