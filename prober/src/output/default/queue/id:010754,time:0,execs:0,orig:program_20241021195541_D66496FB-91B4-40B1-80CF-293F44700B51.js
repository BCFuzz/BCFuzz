const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
const v4 = v3.__proto__;
try { v4.getInt32(); } catch (e) {}
gc();
