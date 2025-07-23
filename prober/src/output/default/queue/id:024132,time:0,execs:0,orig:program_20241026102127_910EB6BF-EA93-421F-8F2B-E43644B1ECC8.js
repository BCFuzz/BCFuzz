const v2 = createGlobalObject().Float16Array;
const v4 = new v2();
const v6 = new ArrayBuffer(v2, ArrayBuffer);
const v7 = new Int16Array(v6);
v7.set(v4);
gc();
