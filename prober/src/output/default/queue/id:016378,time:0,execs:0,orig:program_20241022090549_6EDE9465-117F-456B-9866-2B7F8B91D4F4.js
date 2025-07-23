const v2 = createGlobalObject().Float16Array;
const v3 = new v2(v2);
new Float64Array(v3.subarray());
gc();
