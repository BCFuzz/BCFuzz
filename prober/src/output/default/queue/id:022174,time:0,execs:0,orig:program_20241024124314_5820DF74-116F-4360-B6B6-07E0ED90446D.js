const v4 = new SharedArrayBuffer(256);
const v6 = new DataView(v4);
v6.setUint16(SharedArrayBuffer, TypeError, 4294967297);
gc();
