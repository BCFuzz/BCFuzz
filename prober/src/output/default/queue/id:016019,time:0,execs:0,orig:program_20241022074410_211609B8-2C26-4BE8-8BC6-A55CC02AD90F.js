const t0 = createGlobalObject().Float16Array;
const v4 = new t0(536870912);
const v6 = new Uint32Array();
try { v6.copyWithin(v4); } catch (e) {}
gc();
