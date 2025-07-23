const v2 = new Float32Array(180);
const v5 = new BigUint64Array(5);
try { v2.includes(2502, ...v5); } catch (e) {}
gc();
