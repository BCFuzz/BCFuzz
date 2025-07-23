const v2 = new SharedArrayBuffer(53220);
const v4 = new Int32Array(v2);
createGlobalObject().Atomics.notify(v4);
gc();
