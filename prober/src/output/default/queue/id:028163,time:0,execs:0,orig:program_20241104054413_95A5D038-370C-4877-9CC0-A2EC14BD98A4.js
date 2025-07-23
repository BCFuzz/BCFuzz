const v1 = new Uint8ClampedArray();
v1.subarray();
const v4 = new Int16Array(v1, v1, Int16Array);
v4.subarray().set(v1);
gc();
