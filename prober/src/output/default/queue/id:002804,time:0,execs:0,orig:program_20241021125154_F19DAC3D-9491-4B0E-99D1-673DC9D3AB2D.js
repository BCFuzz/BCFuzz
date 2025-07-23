const v1 = new BigUint64Array();
try { new Uint32Array(v1); } catch (e) {}
gc();
