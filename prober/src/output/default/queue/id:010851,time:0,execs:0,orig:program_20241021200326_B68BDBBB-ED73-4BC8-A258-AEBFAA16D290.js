const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(v2, v2, v1, v2, v2);
const v4 = v3.subarray();
v4[2] = v4;
gc();
