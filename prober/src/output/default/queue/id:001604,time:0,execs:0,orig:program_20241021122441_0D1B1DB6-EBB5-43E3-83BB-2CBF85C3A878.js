const v1 = new Float32Array();
try { BigUint64Array.from(v1); } catch (e) {}
gc();
