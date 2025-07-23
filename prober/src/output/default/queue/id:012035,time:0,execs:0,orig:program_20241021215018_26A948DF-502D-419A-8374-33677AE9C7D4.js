const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
const v4 = v3.__proto__;
try { v4.getBigInt64(); } catch (e) {}
for (let i8 = -3, i9 = 10; i8 < i9; i9--) {
}
gc();
