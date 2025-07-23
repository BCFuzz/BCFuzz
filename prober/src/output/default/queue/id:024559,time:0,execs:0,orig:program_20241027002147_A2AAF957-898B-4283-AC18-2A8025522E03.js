const v1 = new Float32Array();
const v3 = new SharedArrayBuffer(v1, v1);
const v5 = new Int8Array(v3);
v5.set(v1);
gc();
