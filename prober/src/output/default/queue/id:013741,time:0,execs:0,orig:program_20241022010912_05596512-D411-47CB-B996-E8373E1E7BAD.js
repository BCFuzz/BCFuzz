const v2 = new Int32Array(4096);
const v4 = new BigUint64Array();
try { v4.set(v2); } catch (e) {}
const t3 = createGlobalObject().Float16Array;
const v11 = new t3(8);
v11[2] = v11;
v11.toSorted(isFinite);
gc();
