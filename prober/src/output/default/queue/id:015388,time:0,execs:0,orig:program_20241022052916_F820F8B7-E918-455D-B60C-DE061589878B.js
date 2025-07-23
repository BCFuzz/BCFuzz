const v2 = new BigInt64Array(11);
const v4 = new Int16Array();
try { v4.set(v2); } catch (e) {}
gc();
