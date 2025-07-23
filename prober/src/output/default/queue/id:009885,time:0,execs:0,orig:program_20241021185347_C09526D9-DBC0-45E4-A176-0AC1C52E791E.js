const v1 = new SharedArrayBuffer();
const v3 = new DataView(v1);
try { v3.setInt16(); } catch (e) {}
gc();
