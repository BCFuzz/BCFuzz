const v4 = Reflect.construct(Int8Array, [Reflect,Reflect,Reflect,Reflect,Reflect], BigUint64Array);
try { v4.slice(v4, v4, Int8Array, BigUint64Array); } catch (e) {}
gc();
