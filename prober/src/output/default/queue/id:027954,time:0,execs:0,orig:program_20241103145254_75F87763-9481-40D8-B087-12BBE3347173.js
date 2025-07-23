const v2 = new Uint32Array(536870912);
const v4 = createGlobalObject();
const v5 = v4.Atomics;
try { v5.compareExchange(v2, v4, v4, v2); } catch (e) {}
gc();
