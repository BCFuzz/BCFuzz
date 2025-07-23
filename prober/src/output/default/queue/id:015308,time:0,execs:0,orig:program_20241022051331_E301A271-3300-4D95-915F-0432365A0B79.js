const v2 = new Int8Array(2224);
const v4 = new BigInt64Array();
try { v4.set(v2); } catch (e) {}
gc();
