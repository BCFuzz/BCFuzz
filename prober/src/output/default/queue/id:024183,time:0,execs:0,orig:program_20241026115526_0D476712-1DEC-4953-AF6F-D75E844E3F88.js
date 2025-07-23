const v2 = new Uint8Array(156);
const v6 = createGlobalObject().Atomics;
try { v6.compareExchange(v2, v2, 15n); } catch (e) {}
gc();
