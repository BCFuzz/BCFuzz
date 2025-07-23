const v2 = new BigUint64Array(3083);
const v5 = createGlobalObject().Atomics;
try { v5.store(v2); } catch (e) {}
gc();
