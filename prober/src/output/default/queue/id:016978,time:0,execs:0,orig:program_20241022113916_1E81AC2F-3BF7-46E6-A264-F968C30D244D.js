const v2 = new BigUint64Array(3637);
const v3 = v2.values();
try { new Float32Array(v3); } catch (e) {}
gc();
