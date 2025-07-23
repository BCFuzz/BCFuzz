const v1 = new SharedArrayBuffer(SharedArrayBuffer);
const v3 = new DataView(v1);
try { v3.getInt32(v3); } catch (e) {}
gc();
