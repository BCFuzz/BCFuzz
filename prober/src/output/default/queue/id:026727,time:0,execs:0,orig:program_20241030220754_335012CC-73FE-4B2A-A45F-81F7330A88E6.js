const v4 = Reflect.construct(Int8Array, [], BigUint64Array);
try { v4.subarray(); } catch (e) {}
gc();
