const v3 = new SharedArrayBuffer();
const v5 = new DataView(v3);
try { v5.setFloat16(536870887, v5, Int32Array); } catch (e) {}
gc();
