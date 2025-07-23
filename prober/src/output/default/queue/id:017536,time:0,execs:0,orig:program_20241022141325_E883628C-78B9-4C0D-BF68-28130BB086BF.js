const v2 = new Float64Array(45);
const t1 = createGlobalObject().Float16Array;
const v6 = new t1();
const v7 = v6.subarray(v2, Float64Array, createGlobalObject);
try { v7.set(v2); } catch (e) {}
gc();
