const v4 = new ArrayBuffer(25);
const v5 = new Int8Array(v4);
v5.indexOf(1.0);
gc();
