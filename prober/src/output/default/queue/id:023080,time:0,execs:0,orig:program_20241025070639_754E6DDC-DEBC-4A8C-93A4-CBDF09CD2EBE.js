const v1 = -1000000.0 + -1000000.0;
const v3 = new BigUint64Array();
v3.constructor = v1;
try { v3.subarray(); } catch (e) {}
gc();
