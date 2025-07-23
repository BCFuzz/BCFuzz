const t0 = createGlobalObject().Float16Array;
const v5 = new t0(8);
v5[7] = v5;
v5.toSorted(isFinite);
gc();
