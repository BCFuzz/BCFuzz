const v2 = new Float64Array(1729);
const v4 = new BigInt64Array();
try { v4.set(v2); } catch (e) {}
gc();
