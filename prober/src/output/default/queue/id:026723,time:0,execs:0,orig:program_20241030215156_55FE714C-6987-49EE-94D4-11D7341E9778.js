const v2 = new SharedArrayBuffer();
const v3 = new Uint16Array(v2);
const v5 = new Int32Array(v2);
v5.set(v3);
gc();
