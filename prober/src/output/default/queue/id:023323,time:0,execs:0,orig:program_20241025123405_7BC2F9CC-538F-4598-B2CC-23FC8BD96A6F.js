const v1 = new Uint8Array();
v1.subarray();
const v4 = new SharedArrayBuffer();
const v6 = new Float64Array(v4);
v6.set(v1);
gc();
