const v1 = new Int8Array();
const v2 = v1.subarray(v1, v1);
const v5 = new SharedArrayBuffer(SharedArrayBuffer, v1);
const v6 = new Uint8ClampedArray(v5);
v6.set(v2);
gc();
