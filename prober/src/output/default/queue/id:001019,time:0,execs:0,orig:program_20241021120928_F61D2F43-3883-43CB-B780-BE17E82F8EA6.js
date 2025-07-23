const v2 = new BigInt64Array(1000);
try { v2.toSorted(Int32Array); } catch (e) {}
gc();
