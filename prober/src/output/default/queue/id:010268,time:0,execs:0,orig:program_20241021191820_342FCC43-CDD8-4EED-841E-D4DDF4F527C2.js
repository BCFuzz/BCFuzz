const v3 = new Uint8Array(3129);
for (const v5 in v3) {
    const v7 = 255 >>> (65536 >>> v5);
    const v8 = v7 | v7;
    v8 * v8;
}
gc();
