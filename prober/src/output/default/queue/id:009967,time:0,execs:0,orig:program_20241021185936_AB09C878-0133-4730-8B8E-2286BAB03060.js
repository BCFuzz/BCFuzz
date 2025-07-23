const v2 = new BigUint64Array(586);
for (let i = 0; i < 5; i++) {
    const v4 = new SharedArrayBuffer(586);
    const v6 = new DataView(v4);
    try { v6.getFloat32(v6); } catch (e) {}
}
for (const v8 of v2) {
}
gc();
