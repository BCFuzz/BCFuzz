const v4 = Reflect.construct(Uint16Array, [Reflect,Reflect,Reflect,Reflect], BigInt64Array);
try { v4.subarray(BigInt64Array, Uint16Array, v4, Uint16Array, BigInt64Array); } catch (e) {}
gc();
