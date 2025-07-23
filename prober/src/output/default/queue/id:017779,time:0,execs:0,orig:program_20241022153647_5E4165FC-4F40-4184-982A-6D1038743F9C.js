const v2 = new Int32Array(1073741824);
try { BigUint64Array.from(v2); } catch (e) {}
gc();
