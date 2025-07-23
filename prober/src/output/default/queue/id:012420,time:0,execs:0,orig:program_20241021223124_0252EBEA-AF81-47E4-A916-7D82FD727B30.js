const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(v2, createGlobalObject, v1, v2);
delete v3[edenGC];
gc();
