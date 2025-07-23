const v2 = new Float32Array(64);
const v4 = new BigInt64Array();
const v5 = v4.sort();
function f6(a7, a8) {
    const v9 = a8.subarray();
    try { v9.set(a7); } catch (e) {}
    return a7;
}
v5.constructor = f6;
const t9 = v5.constructor;
t9(v2, v5);
gc();
