const v2 = new Int16Array(3436);
const t1 = createGlobalObject().Float16Array;
const v6 = new t1();
try { v6.set(v2); } catch (e) {}
gc();
