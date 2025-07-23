const v1 = new BigInt64Array();
try { Uint16Array.from(v1); } catch (e) {}
gc();
