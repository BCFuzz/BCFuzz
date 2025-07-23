const v2 = new Int16Array(3);
const v6 = createGlobalObject().Atomics;
try { v6.store(v2, v6, 15n); } catch (e) {}
gc();
