const v2 = new ArrayBuffer(9);
const v4 = new DataView(v2);
v4.setUint16();
gc();
