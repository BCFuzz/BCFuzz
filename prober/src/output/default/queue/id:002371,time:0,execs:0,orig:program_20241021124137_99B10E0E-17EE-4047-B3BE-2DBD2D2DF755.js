const v2 = new Int16Array(8);
const v4 = new Int32Array();
const v5 = v4.some;
try { v2.toSorted(v5); } catch (e) {}
gc();
