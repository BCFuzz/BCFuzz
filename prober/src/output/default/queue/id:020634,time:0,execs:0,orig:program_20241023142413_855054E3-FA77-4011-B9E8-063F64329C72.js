const v1 = new Uint16Array();
const v2 = v1.subarray(v1);
const v4 = new Uint32Array(v2, v2, Uint32Array);
v1.set(v4);
gc();
