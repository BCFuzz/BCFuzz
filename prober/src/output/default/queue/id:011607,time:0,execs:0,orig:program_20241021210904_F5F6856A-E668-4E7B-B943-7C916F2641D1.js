const v1 = new BigUint64Array();
const v2 = v1.buffer;
const v3 = v2.transfer();
try { v1.findLast(v3, v2); } catch (e) {}
gc();
