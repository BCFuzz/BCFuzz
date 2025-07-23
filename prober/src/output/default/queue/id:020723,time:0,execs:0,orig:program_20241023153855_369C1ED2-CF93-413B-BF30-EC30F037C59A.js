const v2 = new Uint32Array(3);
createGlobalObject().Atomics.store(v2);
gc();
