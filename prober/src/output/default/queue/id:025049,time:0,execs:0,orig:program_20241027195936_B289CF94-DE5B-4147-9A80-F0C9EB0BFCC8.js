const v1 = new Uint8ClampedArray();
const v4 = new Int32Array(v1, v1.subarray());
v4.subarray().set(v1);
gc();
