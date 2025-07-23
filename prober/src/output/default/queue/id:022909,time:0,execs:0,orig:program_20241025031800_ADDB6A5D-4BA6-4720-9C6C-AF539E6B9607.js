const v2 = new WeakSet();
const v4 = new Int8Array();
try { v4.set(v2, 9007199254740991); } catch (e) {}
gc();
