const v2 = new Int32Array(1073741824);
try { new BigUint64Array(v2); } catch (e) {}
gc();
