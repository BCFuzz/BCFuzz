const v2 = new Uint32Array();
const v4 = new BigUint64Array(255, 255);
try { v2.set(v4, 255); } catch (e) {}
gc();
