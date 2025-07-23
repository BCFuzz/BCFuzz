for (let v0 = 0; v0 < 5; v0++) {
    const v2 = new SharedArrayBuffer();
    const v4 = new DataView(v2);
    try { v4.setFloat16(); } catch (e) {}
}
const v8 = new BigInt64Array(3852);
for (const v9 in v8) {
}
gc();
