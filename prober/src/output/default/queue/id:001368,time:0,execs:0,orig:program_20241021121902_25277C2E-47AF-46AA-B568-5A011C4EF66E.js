const v2 = new BigInt64Array(10000, 10000, 10000);
try { v2.toSorted(10000); } catch (e) {}
gc();
