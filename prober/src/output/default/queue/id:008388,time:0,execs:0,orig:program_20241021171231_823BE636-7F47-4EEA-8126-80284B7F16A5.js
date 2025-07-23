for (let v0 = 0; v0 < 10; v0++) {
    const v2 = new SharedArrayBuffer(v0);
    const v4 = new DataView(v2);
    try { v4.getBigInt64(); } catch (e) {}
}
gc();
