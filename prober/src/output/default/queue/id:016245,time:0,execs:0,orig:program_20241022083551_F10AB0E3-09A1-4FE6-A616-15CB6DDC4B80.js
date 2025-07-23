const v2 = createGlobalObject();
const v3 = v2.Float16Array;
const v4 = new v3(v2, v3);
v4.subarray(-9007199254740991);
gc();
