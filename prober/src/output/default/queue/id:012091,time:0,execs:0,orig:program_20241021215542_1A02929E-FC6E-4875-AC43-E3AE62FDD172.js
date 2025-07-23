const v1 = new WeakMap();
v1.set(WeakMap);
const v3 = v1.set(v1);
v3.delete(v3);
gc();
