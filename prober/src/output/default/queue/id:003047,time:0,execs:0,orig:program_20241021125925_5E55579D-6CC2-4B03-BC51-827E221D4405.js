const v2 = new BigUint64Array();
try { v2.set(v2, -1000000.0); } catch (e) {}
gc();
