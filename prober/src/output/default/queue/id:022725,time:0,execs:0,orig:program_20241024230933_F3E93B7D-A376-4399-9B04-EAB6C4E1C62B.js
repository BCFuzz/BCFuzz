const v2 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v4 = new DataView(v2);
try { v4.getUint32(v4, -4.9292401502188025e+305); } catch (e) {}
gc();
