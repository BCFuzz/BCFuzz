const v4 = Reflect.construct(Float32Array, [], BigInt64Array);
try { v4.subarray(BigInt64Array, v4, v4); } catch (e) {}
gc();
