const v1 = new SharedArrayBuffer();
const v3 = new Float32Array(v1);
v3.sort();
gc();
