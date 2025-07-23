const v1 = new Float64Array(Float64Array, Float64Array);
try { BigUint64Array.from(v1); } catch (e) {}
gc();
