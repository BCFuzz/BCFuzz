const t0 = delete undefined?.h;
const v2 = delete t0[5];
let v3;
try { v3 = v2.grow(); } catch (e) {}
const t4 = createGlobalObject().Float16Array;
const v7 = new t4();
v7.constructor = v3;
v7.subarray();
gc();
