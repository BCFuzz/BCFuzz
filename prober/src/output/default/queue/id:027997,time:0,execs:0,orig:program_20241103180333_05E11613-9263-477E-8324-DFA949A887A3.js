const v1 = new Uint32Array();
const v4 = createGlobalObject().Float16Array;
const v5 = new v4();
const v6 = v5.subarray(v1, v4, Uint32Array);
v1.subarray(v6, v6).set(v5);
gc();
