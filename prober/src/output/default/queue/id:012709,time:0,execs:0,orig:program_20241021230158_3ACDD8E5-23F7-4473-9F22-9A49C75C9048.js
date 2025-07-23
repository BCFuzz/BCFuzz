const t0 = createGlobalObject().Float16Array;
const v4 = new t0();
const v5 = v4.subarray();
try { v5.set("p"); } catch (e) {}
gc();
