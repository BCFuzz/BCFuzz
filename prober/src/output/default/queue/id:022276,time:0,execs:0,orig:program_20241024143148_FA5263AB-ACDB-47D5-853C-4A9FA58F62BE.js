const v2 = Array();
v2[35] = -11;
const t2 = createGlobalObject().Float16Array;
new t2(v2);
gc();
