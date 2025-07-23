const v1 = WeakRef.prototype;
try { v1.deref(v1); } catch (e) {}
gc();
