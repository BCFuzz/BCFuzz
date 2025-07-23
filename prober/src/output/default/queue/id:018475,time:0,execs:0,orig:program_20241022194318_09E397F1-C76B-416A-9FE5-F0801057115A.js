const v3 = new SharedArrayBuffer(1024);
const v5 = new DataView(v3);
try { v5.getFloat16(1, 1024); } catch (e) {}
gc();
