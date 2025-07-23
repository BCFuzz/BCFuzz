const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v4 = new String(v1);
new v2(v4);
gc();
