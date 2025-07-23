const v1 = new Uint32Array(Uint32Array, Uint32Array);
try { BigInt64Array.from(v1); } catch (e) {}
gc();
