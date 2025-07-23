const v1 = new Int32Array();
const v3 = new Float64Array();
v3.subarray(v1, Int32Array).set(v1);
gc();
