const v1 = new WeakSet();
v1.add(WeakSet);
const v3 = v1.add(v1);
v3.delete(v3);
gc();
