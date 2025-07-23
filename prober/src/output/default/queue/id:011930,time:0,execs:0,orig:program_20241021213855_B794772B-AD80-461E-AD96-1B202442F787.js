const v1 = new ArrayBuffer(ArrayBuffer);
const v3 = new DataView(v1);
try { v3.getUint32(); } catch (e) {}
gc();
