const v2 = new Float32Array(Float32Array, -1e-15, Float32Array);
try { v2.with(-1e-15); } catch (e) {}
gc();
