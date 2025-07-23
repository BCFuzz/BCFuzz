const v3 = new SharedArrayBuffer();
const v5 = new DataView(v3);
try { v5.setFloat64(255, -2147483649); } catch (e) {}
gc();
