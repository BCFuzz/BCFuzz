const v1 = new Int8Array();
const v4 = createGlobalObject().Float16Array;
const v5 = new v4();
v5.subarray(v4, v5).set(v1);
gc();
