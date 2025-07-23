const v2 = new BigUint64Array(4096);
try { v2.sort(Symbol); } catch (e) {}
gc();
