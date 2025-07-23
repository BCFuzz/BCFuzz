const v2 = Float64Array.prototype;
const v4 = new BigInt64Array();
try { v4.with(536870888, v2); } catch (e) {}
gc();
