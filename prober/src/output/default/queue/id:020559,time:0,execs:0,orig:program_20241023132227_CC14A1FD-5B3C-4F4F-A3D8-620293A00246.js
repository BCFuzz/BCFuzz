const v3 = new SharedArrayBuffer();
const v5 = new DataView(v3);
try { v5.setFloat64(255, 4294967295, 4294967295); } catch (e) {}
gc();
