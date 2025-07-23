const v4 = Reflect.construct(Int32Array, [Reflect], BigInt64Array);
try { v4.subarray(); } catch (e) {}
gc();
