const v1 = new Int32Array();
const t1 = createGlobalObject().Float16Array;
const v5 = new t1();
v5.subarray(v1).set(v1);
gc();
