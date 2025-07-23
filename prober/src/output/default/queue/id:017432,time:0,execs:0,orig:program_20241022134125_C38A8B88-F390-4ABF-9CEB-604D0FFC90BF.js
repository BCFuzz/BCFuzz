const v3 = createGlobalObject().Float16Array;
v3[2] = -2;
const v4 = new v3(v3);
v4.sort();
gc();
