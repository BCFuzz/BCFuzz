const v1 = new WeakMap();
const t1 = Float64Array.from(v1);
delete t1[-1];
gc();
