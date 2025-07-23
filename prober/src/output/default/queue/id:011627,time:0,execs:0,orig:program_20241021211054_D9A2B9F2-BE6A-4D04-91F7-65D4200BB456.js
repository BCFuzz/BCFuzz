const v1 = new ArrayBuffer(ArrayBuffer);
const v3 = new DataView(v1);
const v4 = v3.__proto__;
try { v4.setBigUint64(); } catch (e) {}
gc();
