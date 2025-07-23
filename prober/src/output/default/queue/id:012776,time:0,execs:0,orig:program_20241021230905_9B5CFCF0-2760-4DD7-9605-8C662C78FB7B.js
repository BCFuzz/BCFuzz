for (let v0 = 0; v0 < 5; v0++) {
    const v2 = new ArrayBuffer(v0);
    const v4 = new DataView(v2);
    const v5 = v4.__proto__;
    try { v5.setInt16(); } catch (e) {}
}
const v9 = new Uint8ClampedArray(2502);
for (const v10 in v9) {
}
gc();
