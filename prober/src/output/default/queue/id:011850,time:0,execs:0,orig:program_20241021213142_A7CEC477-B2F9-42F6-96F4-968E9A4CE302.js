const v1 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
const v3 = new DataView(v1);
try { v3.getInt16(); } catch (e) {}
gc();
