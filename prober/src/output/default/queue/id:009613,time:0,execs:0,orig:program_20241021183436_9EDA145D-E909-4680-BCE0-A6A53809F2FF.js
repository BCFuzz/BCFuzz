const v2 = BigInt64Array.of();
try { v2.slice(1073741825n); } catch (e) {}
gc();
