const v2 = new BigUint64Array();
try { v2.copyWithin(4294967296n); } catch (e) {}
gc();
