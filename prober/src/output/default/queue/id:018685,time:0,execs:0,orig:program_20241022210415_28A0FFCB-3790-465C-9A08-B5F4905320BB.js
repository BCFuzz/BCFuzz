const v2 = new SharedArrayBuffer();
const v4 = new DataView(v2);
try { v4.getUint16(v4, -1.0); } catch (e) {}
gc();
