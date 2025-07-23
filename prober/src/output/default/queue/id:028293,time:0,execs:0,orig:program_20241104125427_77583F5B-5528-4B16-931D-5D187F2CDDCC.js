const v1 = new Int8Array();
const v2 = v1.sort();
const t1 = createGlobalObject().Float16Array;
const v6 = new t1();
v2.subarray(v6);
v6.subarray().set(v1);
gc();
