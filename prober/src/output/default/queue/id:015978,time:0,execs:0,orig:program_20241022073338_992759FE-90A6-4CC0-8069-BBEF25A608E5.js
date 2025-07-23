const v2 = new Int16Array(6);
const v4 = new BigUint64Array();
try { v4.set(v2); } catch (e) {}
gc();
