for (let v0 = 0; v0 < 100; v0++) {
    for (let v1 = 0; v1 < 5; v1++) {
    }
    const v3 = new SharedArrayBuffer(v0, SharedArrayBuffer);
    const v5 = new DataView(v3);
    try { v5.getFloat16(v3); } catch (e) {}
}
gc();
