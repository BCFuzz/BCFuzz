const v1 = /3q\w|\d0/dgs[1];
const v3 = new SharedArrayBuffer(v1);
const v5 = new DataView(v3);
try { v5.getUint16(v5, v1); } catch (e) {}
gc();
