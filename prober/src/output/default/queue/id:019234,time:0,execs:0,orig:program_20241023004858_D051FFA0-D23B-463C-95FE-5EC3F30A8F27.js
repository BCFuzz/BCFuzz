const v2 = new BigInt64Array();
const v3 = v2.reverse();
try { v3.fill(v3, -2137644971n); } catch (e) {}
gc();
