const v2 = new BigInt64Array(2664);
const v5 = createGlobalObject().Atomics;
try { v5.add(v2); } catch (e) {}
gc();
