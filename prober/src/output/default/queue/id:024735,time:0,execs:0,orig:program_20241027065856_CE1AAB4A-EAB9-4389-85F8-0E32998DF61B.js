const v4 = Reflect.construct(Float32Array, [Reflect,Reflect], BigInt64Array);
try { v4.slice(Float32Array); } catch (e) {}
gc();
