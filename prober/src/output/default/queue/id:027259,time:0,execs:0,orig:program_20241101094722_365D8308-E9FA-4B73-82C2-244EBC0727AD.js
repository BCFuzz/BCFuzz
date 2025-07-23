const v1 = new Int8Array();
const v3 = new Float32Array(v1, Float32Array, Float32Array);
v1.subarray(v3.subarray()).set(v3);
gc();
