const v1 = new Uint32Array();
const v2 = v1.subarray();
const v5 = new SharedArrayBuffer(v1, v1);
const v6 = new Uint8ClampedArray(v5);
v6.set(v2);
gc();
