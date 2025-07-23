const v1 = Math.cbrt(Math);
const v3 = createGlobalObject();
const t2 = v3.Float16Array;
const v5 = new t2(Math, v3, v1, Math, Math);
delete v5[v1];
gc();
