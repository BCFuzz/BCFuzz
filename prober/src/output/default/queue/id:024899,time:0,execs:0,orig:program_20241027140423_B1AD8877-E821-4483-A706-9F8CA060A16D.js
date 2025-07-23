const v1 = new Int8Array();
const v2 = v1.slice(v1);
const v4 = new Float64Array();
v4.subarray();
v2.subarray().set(v4);
gc();
