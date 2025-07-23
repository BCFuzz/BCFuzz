const v2 = createGlobalObject();
const t1 = v2.Float16Array;
const v4 = new t1(v2, v2, -9007199254740991n);
try { v4.subarray(-9007199254740991n); } catch (e) {}
gc();
