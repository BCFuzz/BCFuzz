const v2 = new Int8Array(14);
const v3 = v2.subarray();
createGlobalObject().Atomics.sub(v3);
gc();
