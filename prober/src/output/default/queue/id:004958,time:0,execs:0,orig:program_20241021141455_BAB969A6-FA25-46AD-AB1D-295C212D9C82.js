const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
try { BigInt64Array.from(v1); } catch (e) {}
gc();
