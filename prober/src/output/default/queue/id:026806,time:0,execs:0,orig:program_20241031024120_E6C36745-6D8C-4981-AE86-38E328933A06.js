const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v4 = new t1(v1, Int16Array, v1);
v4.subarray(v1);
const v7 = new ArrayBuffer();
const v8 = new Int16Array(v7);
v8.set(v4);
gc();
