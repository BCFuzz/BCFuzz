const v1 = new Float64Array();
const v3 = new Int8Array(v1, Float64Array);
v3.set(v1);
gc();
