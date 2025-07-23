const v1 = new Int8Array();
const v3 = new BigUint64Array();
try { v3.set(v1); } catch (e) {}
gc();
