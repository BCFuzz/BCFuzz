const v2 = new BigUint64Array(156);
createGlobalObject().Atomics.add(v2, v2, 15n);
gc();
