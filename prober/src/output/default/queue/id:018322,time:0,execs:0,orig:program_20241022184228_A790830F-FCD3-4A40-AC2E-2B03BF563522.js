const v2 = new BigInt64Array(14);
v2.subarray();
createGlobalObject().Atomics.load(v2);
gc();
