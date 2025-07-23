const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
try { v3.getBigInt64(v1); } catch (e) {}
gc();
