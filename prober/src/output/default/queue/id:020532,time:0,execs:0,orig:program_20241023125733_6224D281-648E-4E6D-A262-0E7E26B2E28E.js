const v2 = new Int8Array(1000);
const t1 = createGlobalObject().Float16Array;
const v6 = new t1(v2);
v6[0] = v6;
v6.toSorted();
gc();
