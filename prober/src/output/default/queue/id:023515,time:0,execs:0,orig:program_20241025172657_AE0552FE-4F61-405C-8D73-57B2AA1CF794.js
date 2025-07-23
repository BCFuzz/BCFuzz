const v4 = Reflect.construct(BigInt64Array, [Reflect], Float64Array);
try { v4.subarray(); } catch (e) {}
gc();
