const v1 = new Int32Array(Int32Array, Int32Array);
try { BigInt64Array.from(v1); } catch (e) {}
gc();
