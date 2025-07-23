for (let v0 = 0; v0 < 5; v0++) {
    const v2 = new SharedArrayBuffer(v0, SharedArrayBuffer);
    const v4 = new DataView(v2);
    try { v4.getBigInt64(v4, v0); } catch (e) {}
}
gc();
