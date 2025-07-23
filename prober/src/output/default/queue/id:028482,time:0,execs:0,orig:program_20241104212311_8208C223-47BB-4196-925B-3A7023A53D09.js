const v1 = new BigUint64Array();
const v4 = new WeakSet();
try { v1.set(v4, 9007199254740991); } catch (e) {}
gc();
