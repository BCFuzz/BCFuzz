const v2 = new Uint32Array();
const v5 = new BigUint64Array(255);
v5.buffer >>= 2886;
createGlobalObject().Atomics.store(v5, v2, v2);
gc();
