const v2 = new Int32Array(45);
const v5 = createGlobalObject().Float16Array;
const v6 = new v5(v5, v5, v5);
const v7 = v6.subarray();
try { v7.set(v2); } catch (e) {}
gc();
