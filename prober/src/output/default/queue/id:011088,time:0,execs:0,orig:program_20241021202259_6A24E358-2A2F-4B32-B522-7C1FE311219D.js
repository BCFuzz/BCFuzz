const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v3 = new t1(v1, v1, v1);
v3[1858];
gc();
