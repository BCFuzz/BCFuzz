const v2 = new Float64Array();
const v3 = v2.subarray(v2, Float64Array);
const v4 = new Uint8Array(v3, v3, Uint8Array);
v4.subarray().set(v2);
gc();
