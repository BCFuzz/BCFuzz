const v1 = new Uint8Array();
const v3 = new Uint16Array();
const v4 = v3.__proto__;
try { v1.set(v4); } catch (e) {}
gc();
