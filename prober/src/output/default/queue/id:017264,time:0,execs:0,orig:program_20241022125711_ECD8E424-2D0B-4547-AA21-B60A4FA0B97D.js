const t0 = createGlobalObject().Float16Array;
const v4 = new t0(8);
v4[0] = v4;
v4[2] = v4;
v4.toSorted();
gc();
