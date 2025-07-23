const v3 = new BigUint64Array();
try { v3.with("number", 255); } catch (e) {}
gc();
