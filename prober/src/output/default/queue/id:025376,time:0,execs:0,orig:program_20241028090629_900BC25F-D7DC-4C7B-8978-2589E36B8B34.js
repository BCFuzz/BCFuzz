const v2 = new Int8Array(Int8Array);
const v5 = createGlobalObject().Atomics;
try { v5.store(v2, v5, 15n); } catch (e) {}
gc();
