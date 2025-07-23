const v1 = new WeakRef(WeakRef);
const v2 = v1.deref;
try { v2(); } catch (e) {}
gc();
