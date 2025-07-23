const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
const v3 = new DataView(v1);
const v4 = v3.getUint16;
try { v4.call(); } catch (e) {}
gc();
