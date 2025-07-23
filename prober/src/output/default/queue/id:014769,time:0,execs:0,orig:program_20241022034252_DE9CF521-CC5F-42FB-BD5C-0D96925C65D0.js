const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2();
v3.slice(v1, v2);
gc();
