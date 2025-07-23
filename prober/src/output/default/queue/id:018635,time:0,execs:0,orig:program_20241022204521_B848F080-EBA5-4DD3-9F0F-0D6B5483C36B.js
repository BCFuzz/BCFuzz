const v1 = new Float64Array();
const t1 = createGlobalObject().Float16Array;
const v5 = new t1();
v5.subarray().set(v1);
gc();
