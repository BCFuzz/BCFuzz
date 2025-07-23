const v1 = new Int16Array();
const v2 = v1.subarray();
const v5 = new SharedArrayBuffer();
const v6 = new Uint8ClampedArray(v5);
v6.set(v2);
gc();
