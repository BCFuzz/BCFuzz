const v1 = new Uint8Array();
const v4 = createGlobalObject().Float16Array;
const v5 = new v4();
v1.subarray(v5.subarray(), v4).set(v5);
gc();
