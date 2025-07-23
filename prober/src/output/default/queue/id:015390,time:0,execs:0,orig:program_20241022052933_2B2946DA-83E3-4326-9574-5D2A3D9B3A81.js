const v3 = new WeakSet();
const v4 = new Int16Array();
try { v4.set(v3, 9007199254740991); } catch (e) {}
gc();
