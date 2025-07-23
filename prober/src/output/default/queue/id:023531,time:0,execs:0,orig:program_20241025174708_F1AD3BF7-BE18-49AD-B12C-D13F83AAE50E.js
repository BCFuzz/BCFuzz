const v1 = new Int32Array();
const v3 = new Float64Array(v1);
v1.subarray(Int32Array).set(v3);
gc();
