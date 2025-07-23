const v2 = new Uint8ClampedArray(1044);
const t1 = createGlobalObject().Float16Array;
const v6 = new t1();
try { v6.set(v2); } catch (e) {}
gc();
