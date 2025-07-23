const v1 = new SharedArrayBuffer();
const v3 = new Uint16Array();
v3.subarray(v3, v3);
const v6 = new Float64Array(v1);
v6.set(v3);
gc();
