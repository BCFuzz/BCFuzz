const v1 = new Float64Array();
v1.subarray();
const t1 = createGlobalObject().Float16Array;
const v6 = new t1();
v6.subarray().set(v1);
gc();
