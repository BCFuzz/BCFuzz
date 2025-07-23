const v2 = new WeakRef(WeakRef);
const v3 = v2.deref;
try { v3.call(7n); } catch (e) {}
gc();
