const v2 = BigInt64Array.from(-4294967295n);
try { v2.sort(-4294967295n); } catch (e) {}
gc();
