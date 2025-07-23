const v2 = new WeakMap();
const t1 = v2.constructor;
const v4 = new t1();
v4.delete(NaN);
gc();
