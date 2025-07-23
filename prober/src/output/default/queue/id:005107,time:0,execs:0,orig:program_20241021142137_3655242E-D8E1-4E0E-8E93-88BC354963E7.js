const v1 = new BigUint64Array();
try { Uint32Array.from(v1); } catch (e) {}
gc();
