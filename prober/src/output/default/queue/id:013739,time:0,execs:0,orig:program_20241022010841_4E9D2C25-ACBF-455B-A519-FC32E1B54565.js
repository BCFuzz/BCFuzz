const v2 = new Float64Array(2292);
const v4 = new BigUint64Array();
const v5 = v4.slice(2292, 2292);
try { v5.set(v2); } catch (e) {}
gc();
