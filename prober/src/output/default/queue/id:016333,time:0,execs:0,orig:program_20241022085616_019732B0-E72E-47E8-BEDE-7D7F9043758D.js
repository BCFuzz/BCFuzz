const v4 = new SharedArrayBuffer(127);
const v6 = new DataView(v4);
try { v6.setFloat64(255, -2147483649, 127); } catch (e) {}
gc();
