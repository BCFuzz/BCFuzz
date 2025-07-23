const v2 = new WeakSet();
const v4 = new Uint16Array(v2, 9007199254740991, 9007199254740991);
try { v4.set(v2, 9007199254740991); } catch (e) {}
gc();
