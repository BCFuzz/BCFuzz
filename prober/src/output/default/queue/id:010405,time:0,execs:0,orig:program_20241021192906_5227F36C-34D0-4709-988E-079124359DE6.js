const v2 = new Uint8Array(1062);
const v4 = new Int8Array(v2, 1062);
for (const v5 of v2) {
    try { v4.reduce(v5); } catch (e) {}
}
gc();
