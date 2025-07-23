const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
const v4 = createGlobalObject().Atomics;
try { v4.waitAsync(v1); } catch (e) {}
gc();
