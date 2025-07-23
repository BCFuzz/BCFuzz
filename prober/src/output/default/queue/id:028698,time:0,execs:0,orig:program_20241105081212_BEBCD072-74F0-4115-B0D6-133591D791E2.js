for (let i = 0; i < 5; i++) {
    const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
    const v3 = new DataView(v1);
    const v4 = v3.setBigInt64;
    try { v4(); } catch (e) {}
}
gc();
