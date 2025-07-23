const v2 = new Uint32Array(6);
const v6 = createGlobalObject().Atomics;
try { v6.and(v2, v2, 9223372036854775807n); } catch (e) {}
gc();
