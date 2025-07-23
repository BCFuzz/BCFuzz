const v1 = new Uint16Array();
try { BigUint64Array.from(v1); } catch (e) {}
gc();
