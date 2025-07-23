const v1 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
const v3 = new DataView(v1);
v1.transfer();
try { v3.getBigUint64(v1, v3, DataView); } catch (e) {}
gc();
