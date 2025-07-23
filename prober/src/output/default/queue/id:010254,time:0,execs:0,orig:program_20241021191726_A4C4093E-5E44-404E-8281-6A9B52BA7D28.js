const v2 = createGlobalObject().Atomics;
try { v2.notify(v2); } catch (e) {}
gc();
