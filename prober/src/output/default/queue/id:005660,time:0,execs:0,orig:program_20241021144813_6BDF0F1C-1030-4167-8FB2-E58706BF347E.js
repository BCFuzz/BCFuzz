const v1 = new Uint8ClampedArray();
const v4 = Int32Array.from(v1);
try { v4.toSorted(512); } catch (e) {}
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
gc();
