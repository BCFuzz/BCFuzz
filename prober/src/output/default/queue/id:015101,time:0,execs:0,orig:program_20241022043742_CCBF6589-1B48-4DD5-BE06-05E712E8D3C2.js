const v1 = new Float64Array(Float64Array, Float64Array, Float64Array);
try { v1.with(-1e-15); } catch (e) {}
gc();
