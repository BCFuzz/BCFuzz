const v2 = new BigUint64Array(1024);
const v5 = createGlobalObject().Atomics;
try { v5.and(v2); } catch (e) {}
gc();
