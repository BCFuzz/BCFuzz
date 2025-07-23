const v2 = new Int8Array(14);
v2.subarray();
createGlobalObject().Atomics.load(v2);
gc();
