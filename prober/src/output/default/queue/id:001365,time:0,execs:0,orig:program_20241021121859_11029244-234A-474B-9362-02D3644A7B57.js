const v1 = new WeakSet();
const v2 = v1.has;
try { v2(v2, v2, v2, v2, v1); } catch (e) {}
gc();
