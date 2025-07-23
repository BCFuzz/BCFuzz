const v2 = new BigInt64Array(2910);
createGlobalObject().Atomics.compareExchange(v2, BigInt64Array, 9007199254740991n, 9007199254740991n);
gc();
