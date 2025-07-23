const v6 = Reflect.construct(BigInt64Array, [536870912], Float64Array);
try { v6.subarray(-15); } catch (e) {}
gc();
