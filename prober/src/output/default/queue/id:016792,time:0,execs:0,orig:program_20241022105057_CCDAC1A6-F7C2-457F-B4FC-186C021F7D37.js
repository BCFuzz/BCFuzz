const v4 = new ArrayBuffer(5);
const v5 = new Int8Array(v4);
v5.lastIndexOf(12);
gc();
