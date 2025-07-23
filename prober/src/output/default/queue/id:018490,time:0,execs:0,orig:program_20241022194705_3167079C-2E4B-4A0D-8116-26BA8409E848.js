const v4 = createGlobalObject().Float16Array;
v4[1] = 2228;
v4[2] = -2;
const v5 = new v4(v4);
v5.sort();
gc();
