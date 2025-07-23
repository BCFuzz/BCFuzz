const v4 = new BigUint64Array(1000);
const v7 = createGlobalObject().Atomics;
try { v7.compareExchange(v4, 128, -4294967295n); } catch (e) {}
gc();
