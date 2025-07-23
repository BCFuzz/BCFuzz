let v0 = "p";
v0 %= v0;
createGlobalObject().Atomics.isLockFree(v0);
gc();
