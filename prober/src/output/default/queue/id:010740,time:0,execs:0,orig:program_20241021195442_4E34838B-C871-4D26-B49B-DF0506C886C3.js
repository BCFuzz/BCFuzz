const v3 = createGlobalObject().Float16Array;
const v4 = new v3();
v4.subarray(4294967295, v3, v4).set(4294967295);
gc();
