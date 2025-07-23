const v2 = createGlobalObject().Float16Array;
const v5 = new Uint8ClampedArray(4294967296);
try { v2.from(v5); } catch (e) {}
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
