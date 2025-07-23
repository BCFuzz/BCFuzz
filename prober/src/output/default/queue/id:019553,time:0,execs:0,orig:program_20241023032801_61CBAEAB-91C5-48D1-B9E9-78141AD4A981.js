const t0 = createGlobalObject().Float16Array;
const v3 = new t0();
try { BigInt64Array.from(v3); } catch (e) {}
gc();
