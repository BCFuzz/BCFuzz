const v1 = new WeakSet();
const v2 = v1.add;
try { v2(v1, v2, WeakSet); } catch (e) {}
gc();
