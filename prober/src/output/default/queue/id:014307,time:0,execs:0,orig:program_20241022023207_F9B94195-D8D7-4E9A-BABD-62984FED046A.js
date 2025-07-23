const v1 = new BigInt64Array();
const v3 = new Int16Array();
try { v3.set(v1); } catch (e) {}
gc();
