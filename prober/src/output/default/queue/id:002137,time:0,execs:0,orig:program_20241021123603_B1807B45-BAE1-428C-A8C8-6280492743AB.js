const v1 = new BigUint64Array();
try { new Int8Array(v1); } catch (e) {}
gc();
