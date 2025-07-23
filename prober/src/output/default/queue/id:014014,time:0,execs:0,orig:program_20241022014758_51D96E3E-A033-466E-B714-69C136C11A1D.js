const v3 = new Uint8ClampedArray(2345);
const v4 = new BigUint64Array();
try { v4.set(v3); } catch (e) {}
for (let i8 = -3, i9 = 10; i8 < i9; i9--) {
}
gc();
