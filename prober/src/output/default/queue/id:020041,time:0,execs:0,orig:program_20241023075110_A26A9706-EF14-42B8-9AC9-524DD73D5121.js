const v2 = createGlobalObject().Float16Array;
const v5 = new SharedArrayBuffer();
try { new v2(v5, 2580); } catch (e) {}
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
