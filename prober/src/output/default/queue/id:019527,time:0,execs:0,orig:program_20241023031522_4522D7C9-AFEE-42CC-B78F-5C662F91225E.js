let v0 = -4294967297;
v0--;
for (let i4 = 0, i5 = 10; i5--, i4 < i5;) {
    const v14 = createGlobalObject().Atomics;
    try { v14.compareExchange(v14, i5, v0, i5); } catch (e) {}
}
const v18 = new Uint8Array(3129);
for (const v19 in v18) {
}
gc();
