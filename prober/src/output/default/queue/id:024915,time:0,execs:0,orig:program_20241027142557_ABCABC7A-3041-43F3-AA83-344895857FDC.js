const v2 = new BigUint64Array(268435456);
try { v2.sort(BigUint64Array); } catch (e) {}
gc();
