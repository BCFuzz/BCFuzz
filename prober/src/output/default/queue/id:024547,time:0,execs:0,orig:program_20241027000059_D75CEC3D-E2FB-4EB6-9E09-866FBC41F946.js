const v2 = new Int8Array(8);
v2.subarray(8, 8);
createGlobalObject().Atomics.add(v2);
gc();
