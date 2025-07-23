const v1 = new Uint32Array();
const v4 = new BigInt64Array(255);
createGlobalObject().Atomics.store(v4, v1, v1);
gc();
