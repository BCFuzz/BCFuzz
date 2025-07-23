const v2 = new BigInt64Array(5);
const v4 = new Float64Array();
const v5 = v4.subarray();
try { v5.set(v2); } catch (e) {}
gc();
