const v3 = new WeakSet();
const v4 = new Int16Array();
try { v4.set(v3, 512n); } catch (e) {}
gc();
