const v3 = createGlobalObject().Atomics.wait;
try { v3.call(); } catch (e) {}
gc();
