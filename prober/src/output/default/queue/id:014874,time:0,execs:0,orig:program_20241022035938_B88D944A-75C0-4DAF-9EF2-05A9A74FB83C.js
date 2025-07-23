const v2 = new Int32Array(256);
createGlobalObject().Atomics.xor(v2);
gc();
