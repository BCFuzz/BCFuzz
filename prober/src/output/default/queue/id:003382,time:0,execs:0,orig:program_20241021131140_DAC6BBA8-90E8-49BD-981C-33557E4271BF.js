const v1 = new WeakMap();
v1.set(v1, v1);
gc();
