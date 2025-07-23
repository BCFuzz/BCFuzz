const v1 = new ArrayBuffer();
const v3 = new DataView(v1);
try { v3.setBigUint64(); } catch (e) {}
gc();
