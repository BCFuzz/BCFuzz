const v2 = new BigUint64Array(9);
const v4 = new Int32Array();
try { v4.set(v2); } catch (e) {}
gc();
