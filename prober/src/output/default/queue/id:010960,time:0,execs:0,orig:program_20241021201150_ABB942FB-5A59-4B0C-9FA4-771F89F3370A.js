const v2 = new Int8Array(512);
for (const v3 in v2) {
    const v5 = new Uint8ClampedArray(v2, 512);
    try { v5.with(v3, v3); } catch (e) {}
}
gc();
