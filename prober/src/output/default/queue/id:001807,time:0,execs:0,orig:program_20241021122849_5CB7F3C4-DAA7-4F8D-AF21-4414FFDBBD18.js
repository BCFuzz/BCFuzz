const v3 = new BigInt64Array("n", 50, 50);
try { v3.with(50, "n"); } catch (e) {}
gc();
