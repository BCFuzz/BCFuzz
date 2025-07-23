const v2 = new SharedArrayBuffer();
const v4 = new DataView(v2);
try { v4.getInt32(v4, Map); } catch (e) {}
gc();
