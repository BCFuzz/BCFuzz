function f0(a1, a2, a3) {
    const v6 = new SharedArrayBuffer();
    const v8 = new DataView(v6);
    try { v8.setFloat64(a3, -2147483649); } catch (e) {}
    return v8;
}
f0(f0, f0, f0());
const v14 = new BigInt64Array(3641);
for (const v15 of v14) {
}
gc();
