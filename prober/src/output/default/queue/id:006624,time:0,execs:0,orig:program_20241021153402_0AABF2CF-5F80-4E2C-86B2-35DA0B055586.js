const v1 = -4n;
const v3 = new Float32Array(Float32Array, 4n, Float32Array);
try { v3.slice(v1); } catch (e) {}
gc();
