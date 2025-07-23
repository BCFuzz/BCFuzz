const v2 = new BigUint64Array(2910);
createGlobalObject().Atomics.compareExchange(v2, BigUint64Array, 9007199254740991n, 9007199254740991n);
gc();
