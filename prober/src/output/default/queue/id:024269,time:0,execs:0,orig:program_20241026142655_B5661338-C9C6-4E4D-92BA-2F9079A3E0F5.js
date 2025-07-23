const v1 = new BigInt64Array();
const v4 = createGlobalObject().Atomics;
try { v4.notify(v1); } catch (e) {}
gc();
