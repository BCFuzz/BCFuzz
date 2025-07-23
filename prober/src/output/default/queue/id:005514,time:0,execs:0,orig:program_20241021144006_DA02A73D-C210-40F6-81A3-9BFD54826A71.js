const v1 = new BigUint64Array();
try { Uint8ClampedArray.from(v1); } catch (e) {}
gc();
