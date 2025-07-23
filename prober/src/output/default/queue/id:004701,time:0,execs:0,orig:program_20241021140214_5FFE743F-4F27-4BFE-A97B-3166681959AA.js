const v1 = new BigUint64Array();
try { new Uint8Array(v1); } catch (e) {}
gc();
