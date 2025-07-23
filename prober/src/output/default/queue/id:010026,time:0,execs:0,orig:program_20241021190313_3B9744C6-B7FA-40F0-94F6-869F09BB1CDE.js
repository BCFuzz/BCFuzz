const v2 = new SharedArrayBuffer();
const v4 = new DataView(v2);
try { v4.setFloat64(255, 255); } catch (e) {}
gc();
