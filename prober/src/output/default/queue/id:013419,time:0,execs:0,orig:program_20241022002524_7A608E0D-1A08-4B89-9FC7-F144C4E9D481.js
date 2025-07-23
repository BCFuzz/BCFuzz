const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
const v3 = new Uint8Array(v1, Float32Array, Float32Array);
try { v3.set(v1, 191); } catch (e) {}
gc();
