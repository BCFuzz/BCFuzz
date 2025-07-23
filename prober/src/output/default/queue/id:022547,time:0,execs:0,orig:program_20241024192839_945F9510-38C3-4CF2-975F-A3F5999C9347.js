const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v5 = new WeakSet();
const v6 = new v2(v1, 9007199254740991);
try { v6.set(v5, 9007199254740991); } catch (e) {}
gc();
