const v1 = new BigInt64Array();
try { Int8Array.from(v1); } catch (e) {}
gc();
