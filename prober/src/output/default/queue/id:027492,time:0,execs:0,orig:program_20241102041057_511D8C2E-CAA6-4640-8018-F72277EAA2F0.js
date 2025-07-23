const v2 = new Uint16Array(1024);
v2.subarray();
createGlobalObject().Atomics.and(v2);
gc();
