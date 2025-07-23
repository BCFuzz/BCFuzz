for (let i3 = 0, i4 = 10; i4--, i3 < i4;) {
    const v13 = createGlobalObject().Atomics;
    try { v13.compareExchange(v13, i4, -4294967297, i4); } catch (e) {}
}
const v17 = new Uint8Array(3129);
for (const v18 in v17) {
}
gc();
