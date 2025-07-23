const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2();
v3.valueOf = createGlobalObject;
v3.subarray(v1, createGlobalObject, createGlobalObject, v2);
gc();
