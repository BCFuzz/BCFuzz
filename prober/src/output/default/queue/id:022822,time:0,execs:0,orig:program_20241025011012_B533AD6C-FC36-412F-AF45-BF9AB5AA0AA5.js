const v2 = new BigInt64Array(2910);
const v6 = createGlobalObject().Atomics;
try { v6.compareExchange(v2, BigInt64Array, 9007199254740991n); } catch (e) {}
gc();
