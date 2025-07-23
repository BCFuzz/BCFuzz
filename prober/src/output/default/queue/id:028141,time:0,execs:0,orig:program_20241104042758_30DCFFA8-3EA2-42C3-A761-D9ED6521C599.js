const v1 = new Uint8ClampedArray();
const v2 = v1.subarray(Uint8ClampedArray, v1);
const v5 = new SharedArrayBuffer();
const v6 = new Float32Array(v5);
v6.set(v2);
gc();
