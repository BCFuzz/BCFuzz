const v2 = BigInt64Array.of();
const v3 = new BigInt64Array(v2, 50);
try { v3.with(50, v2); } catch (e) {}
gc();
