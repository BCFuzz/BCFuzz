const v2 = new BigInt64Array("g");
try { v2.toSorted("g"); } catch (e) {}
gc();
