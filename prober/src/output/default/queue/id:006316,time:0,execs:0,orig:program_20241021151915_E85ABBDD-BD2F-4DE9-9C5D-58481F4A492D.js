const v1 = new BigInt64Array();
try { Uint32Array.from(v1); } catch (e) {}
gc();
