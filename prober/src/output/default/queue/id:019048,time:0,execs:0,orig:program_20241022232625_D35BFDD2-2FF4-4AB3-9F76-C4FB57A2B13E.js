const v2 = new BigInt64Array(268435456);
createGlobalObject().Atomics.notify(v2, BigInt64Array);
gc();
