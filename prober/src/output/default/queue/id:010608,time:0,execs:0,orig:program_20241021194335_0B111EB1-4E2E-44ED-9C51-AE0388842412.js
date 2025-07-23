const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
try { v3.getBigUint64(); } catch (e) {}
gc();
