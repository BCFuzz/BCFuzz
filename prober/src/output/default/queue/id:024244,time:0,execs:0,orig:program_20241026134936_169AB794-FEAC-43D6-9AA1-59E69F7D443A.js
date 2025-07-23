const v2 = new BigUint64Array(14);
v2.subarray(14);
createGlobalObject().Atomics.load(v2);
gc();
