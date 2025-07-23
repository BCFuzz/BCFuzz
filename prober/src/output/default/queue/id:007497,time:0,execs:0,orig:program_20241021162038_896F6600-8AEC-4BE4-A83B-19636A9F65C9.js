const v1 = new SharedArrayBuffer();
const v3 = new DataView(v1);
v3.byteOffset;
gc();
