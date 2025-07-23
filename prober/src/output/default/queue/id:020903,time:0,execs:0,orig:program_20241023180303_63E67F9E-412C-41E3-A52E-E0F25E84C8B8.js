const v3 = new Int32Array(2910);
const v7 = createGlobalObject().Atomics;
try { v7.compareExchange(v3, BigInt64Array, 9007199254740991n); } catch (e) {}
gc();
