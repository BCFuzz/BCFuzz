const v1 = new WeakRef(WeakRef);
v1.deref;
drainMicrotasks();
gc();
