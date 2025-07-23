const v1 = new Float64Array();
const v3 = new Float64Array(v1.subarray(), Float64Array, v1);
v3.subarray();
gc();
