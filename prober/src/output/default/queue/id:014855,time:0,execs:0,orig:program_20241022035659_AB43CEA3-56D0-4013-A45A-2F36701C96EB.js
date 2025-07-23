const v1 = new WeakSet();
const t1 = createGlobalObject().Float16Array;
const v6 = new t1();
v6.copyWithin(v1, -4294967296);
gc();
