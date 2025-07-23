const v2 = createGlobalObject().Float16Array;
const v3 = new v2();
v3.subarray();
const v6 = new Float32Array(v3, v2);
v6.subarray().set(v3);
gc();
