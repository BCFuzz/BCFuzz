const v2 = new Uint8Array(1147);
for (const v3 of v2) {
    const v7 = new ArrayBuffer(v3);
    const v9 = new DataView(v7);
    try { v9.setInt32(undefined, v9, null); } catch (e) {}
}
gc();
