const v2 = new Int8Array(Int8Array);
const v5 = createGlobalObject().Atomics;
try { v5.compareExchange(v2, v2, 15n); } catch (e) {}
gc();
