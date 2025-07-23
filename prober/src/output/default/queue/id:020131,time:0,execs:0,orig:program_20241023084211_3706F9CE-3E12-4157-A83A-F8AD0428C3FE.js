const v4 = new SharedArrayBuffer(256);
const v6 = new DataView(v4);
v6.setInt32(SharedArrayBuffer, TypeError, -9007199254740990);
gc();
