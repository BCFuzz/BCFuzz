const v2 = new Int32Array(2130);
const v4 = new BigInt64Array();
try { v4.set(v2); } catch (e) {}
gc();
