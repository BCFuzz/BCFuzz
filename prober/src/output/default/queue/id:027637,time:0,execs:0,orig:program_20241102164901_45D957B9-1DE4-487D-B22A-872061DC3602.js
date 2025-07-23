const v2 = createGlobalObject().Float16Array;
const v3 = new v2();
v3.subarray(v2);
const v6 = new SharedArrayBuffer();
const v8 = new Float64Array(v6);
v8.set(v3);
gc();
