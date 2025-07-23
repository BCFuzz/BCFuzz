const t0 = createGlobalObject().Float16Array;
const v4 = new t0();
const v5 = v4.subarray(127);
try { v5.with(127); } catch (e) {}
gc();
