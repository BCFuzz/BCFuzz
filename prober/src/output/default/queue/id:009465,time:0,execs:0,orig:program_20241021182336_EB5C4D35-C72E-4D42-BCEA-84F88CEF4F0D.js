const v2 = new SharedArrayBuffer();
const v4 = new DataView(v2);
try { v4.setInt8(-2147483649); } catch (e) {}
gc();
