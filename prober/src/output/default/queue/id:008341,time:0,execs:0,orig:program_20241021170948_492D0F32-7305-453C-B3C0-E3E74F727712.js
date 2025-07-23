const v1 = new WeakMap();
const v2 = v1.has;
try { v2.call(); } catch (e) {}
gc();
