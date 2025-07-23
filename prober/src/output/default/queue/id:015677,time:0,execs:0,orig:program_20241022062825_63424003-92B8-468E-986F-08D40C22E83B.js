const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
const v2 = v1.constructor;
const v3 = v2.bind(v2, v2, v1, v1, v2);
try { v3(); } catch (e) {}
gc();
