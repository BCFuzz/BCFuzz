const v1 = new Int32Array();
const v3 = new Float64Array(v1, Float64Array, Int32Array);
v3.subarray();
v1.subarray().set(v3);
gc();
