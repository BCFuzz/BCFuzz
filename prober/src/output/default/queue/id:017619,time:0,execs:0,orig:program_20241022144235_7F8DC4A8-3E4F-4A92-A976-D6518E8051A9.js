const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
const v3 = new WeakSet();
v3.add(v1);
v3.add(WeakSet);
const v6 = v3.add(v3);
v6.delete(v6);
v6.delete(v6);
gc();
