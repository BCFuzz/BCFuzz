let v1;
try { v1 = Int16Array.apply(Int16Array, Int16Array, Int16Array); } catch (e) {}
const v5 = new SharedArrayBuffer(256);
const v7 = new DataView(v5);
v7.setUint16(SharedArrayBuffer, TypeError, v1);
gc();
