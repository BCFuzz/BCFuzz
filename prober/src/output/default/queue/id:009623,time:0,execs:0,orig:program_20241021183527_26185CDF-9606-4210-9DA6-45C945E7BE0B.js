const v1 = new WeakMap();
const v2 = v1.set(v1);
v2.get(v2);
gc();
