const v2 = new Int8Array(256);
const v6 = Reflect.construct(Uint32Array, [Int8Array,Int8Array,Int8Array,Int8Array]);
try { v6.set(v2); } catch (e) {}
gc();
