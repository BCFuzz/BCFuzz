const v2 = new Int32Array(256);
v2.subarray();
createGlobalObject().Atomics.notify(v2);
gc();
