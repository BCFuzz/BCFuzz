const v4 = createGlobalObject().Float16Array;
v4[0] = "-1452228648";
v4[2] = -2;
const v5 = new v4(v4);
v5.sort();
gc();
