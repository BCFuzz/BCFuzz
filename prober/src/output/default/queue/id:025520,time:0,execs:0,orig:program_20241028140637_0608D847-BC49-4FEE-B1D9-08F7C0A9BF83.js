const v2 = new Float64Array();
v2.subarray();
const v5 = new SharedArrayBuffer(SharedArrayBuffer, v2);
const v6 = new Float32Array(v5);
v2.set(v6);
gc();
