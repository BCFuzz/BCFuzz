for (let v0 = 0; v0 < 5; v0++) {
    const v2 = new ArrayBuffer(v0);
    const v4 = new DataView(v2);
    const v5 = v4.setBigUint64;
    try { v5(); } catch (e) {}
}
gc();
