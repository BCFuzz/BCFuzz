const v2 = new SharedArrayBuffer(4);
const v4 = new Int32Array(v2);
v4.sort();
gc();
