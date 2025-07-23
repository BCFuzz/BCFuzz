const v2 = new BigInt64Array(256);
const v5 = createGlobalObject().Atomics;
try { v5.and(v2); } catch (e) {}
gc();
