const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
const v5 = v3.__proto__.getUint32;
try { v5.call(); } catch (e) {}
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
