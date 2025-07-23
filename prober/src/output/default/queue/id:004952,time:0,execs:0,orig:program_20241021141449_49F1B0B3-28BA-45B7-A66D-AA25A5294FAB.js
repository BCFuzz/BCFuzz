const v2 = new BigInt64Array();
try { v2.set(Uint32Array); } catch (e) {}
gc();
