const v1 = new WeakMap();
v1.delete(v1);
gc();
