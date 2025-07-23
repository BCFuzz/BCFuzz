const v2 = new BigInt64Array(64);
createGlobalObject().Atomics.notify(v2);
gc();
