const v4 = new SharedArrayBuffer(256);
const v6 = new DataView(v4);
v6.setInt32(SharedArrayBuffer, TypeError, 4294967297);
gc();
