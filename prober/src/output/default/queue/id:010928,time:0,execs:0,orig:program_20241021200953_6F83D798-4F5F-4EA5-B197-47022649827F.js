const v1 = new BigUint64Array();
try { Int16Array.from(v1); } catch (e) {}
gc();
