const v2 = new Int8Array(1024);
v2.g = v2;
const v4 = new Uint8Array();
const v5 = v2.g;
const v8 = createGlobalObject().Atomics;
v8[Symbol.toPrimitive] = createGlobalObject;
try { v8.compareExchange(v5, v5, v4, v8); } catch (e) {}
gc();
