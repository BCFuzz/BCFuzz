const v2 = new Uint32Array(10);
const v3 = v2.subarray();
createGlobalObject().Atomics.sub(v3);
gc();
