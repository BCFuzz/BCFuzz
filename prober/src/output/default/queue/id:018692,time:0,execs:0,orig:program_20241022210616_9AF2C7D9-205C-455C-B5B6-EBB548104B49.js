const v1 = new BigInt64Array();
const v2 = v1.reverse();
try { v2.fill(); } catch (e) {}
gc();
