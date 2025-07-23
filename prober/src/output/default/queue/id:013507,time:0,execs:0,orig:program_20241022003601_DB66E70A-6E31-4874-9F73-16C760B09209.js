const v2 = new ArrayBuffer(15);
const v4 = new DataView(v2);
v4.getInt32();
gc();
