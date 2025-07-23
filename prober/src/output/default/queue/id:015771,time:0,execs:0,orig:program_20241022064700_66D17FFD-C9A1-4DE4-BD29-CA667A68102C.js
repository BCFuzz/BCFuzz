const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
const v2 = v1.sort;
let v3;
try { v3 = v2(); } catch (e) {}
const t4 = createGlobalObject().Float16Array;
const v7 = new t4(createGlobalObject);
v7.reverse().toSorted(v3);
gc();
