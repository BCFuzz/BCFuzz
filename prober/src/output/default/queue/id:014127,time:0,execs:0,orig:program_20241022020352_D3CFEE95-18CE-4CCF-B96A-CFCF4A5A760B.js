const v2 = new SharedArrayBuffer(1024);
const v4 = new Uint32Array(v2);
v4.sort();
gc();
