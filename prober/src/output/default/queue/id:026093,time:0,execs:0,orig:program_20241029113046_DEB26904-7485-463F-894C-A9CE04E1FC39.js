const v3 = createGlobalObject().Atomics.and;
try { v3.call(); } catch (e) {}
gc();
