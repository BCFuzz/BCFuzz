const v2 = new SharedArrayBuffer();
const v4 = new DataView(v2);
try { v4.getBigInt64(v4, "Ov"); } catch (e) {}
gc();
