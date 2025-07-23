const v2 = new BigUint64Array(6);
createGlobalObject().Atomics.and(v2, v2, 9223372036854775807n);
gc();
