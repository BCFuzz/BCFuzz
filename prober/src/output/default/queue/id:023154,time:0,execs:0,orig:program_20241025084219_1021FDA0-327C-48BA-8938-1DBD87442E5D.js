const v1 = new Int16Array();
const v5 = createGlobalObject().Float16Array;
const v6 = new ArrayBuffer(v5, ArrayBuffer);
const v7 = new v5(v6);
v7.set(v1);
gc();
