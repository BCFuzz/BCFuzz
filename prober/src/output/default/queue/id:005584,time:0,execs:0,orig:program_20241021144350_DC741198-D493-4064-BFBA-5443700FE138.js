const v2 = new BigUint64Array();
try { v2.with(2147483649); } catch (e) {}
gc();
