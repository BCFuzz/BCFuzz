const v4 = createGlobalObject().Float16Array;
v4[2] = -2;
v4[1] = -63095;
const v5 = new v4(v4);
v5.sort();
gc();
