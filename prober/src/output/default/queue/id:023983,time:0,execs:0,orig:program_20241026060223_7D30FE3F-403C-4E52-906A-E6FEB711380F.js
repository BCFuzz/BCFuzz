const t0 = createGlobalObject().Float16Array;
const v5 = new t0(1073741824);
try { v5.sort(Int8Array); } catch (e) {}
gc();
