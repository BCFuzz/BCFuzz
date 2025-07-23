const v2 = new SharedArrayBuffer(3.0, SharedArrayBuffer);
const v4 = new DataView(v2);
try { v4.getUint32(v4, 3.0); } catch (e) {}
gc();
