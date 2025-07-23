const v4 = new Float32Array(72);
const v5 = new BigUint64Array();
try { v4.set(v5, 4); } catch (e) {}
gc();
