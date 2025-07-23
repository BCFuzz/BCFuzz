const v0 = [1575176684,82811452,1073741823,8,-9007199254740990];
v0.reverse();
v0[307] = v0;
const t3 = createGlobalObject().Float16Array;
const v5 = new t3(v0);
v5.toSorted();
gc();
