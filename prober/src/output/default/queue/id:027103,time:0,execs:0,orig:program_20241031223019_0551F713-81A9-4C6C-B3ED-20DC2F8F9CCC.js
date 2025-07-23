const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(v1, v2, v1, v2, v1);
v3.subarray();
const v6 = new Int32Array(v1, v2);
v6.subarray().set(v3);
gc();
