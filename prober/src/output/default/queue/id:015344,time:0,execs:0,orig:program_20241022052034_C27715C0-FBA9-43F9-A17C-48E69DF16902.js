const v1 = [129];
const v3 = new ArrayBuffer();
const v5 = new DataView(v3);
try { v5.getFloat32(v1, 129); } catch (e) {}
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
}
gc();
