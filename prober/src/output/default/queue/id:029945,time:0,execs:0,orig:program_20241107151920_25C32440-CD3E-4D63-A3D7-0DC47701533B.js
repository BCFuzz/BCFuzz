const v2 = new SharedArrayBuffer(56);
const v4 = new Int32Array(v2);
createGlobalObject().Atomics.waitAsync(v4);
gc();
