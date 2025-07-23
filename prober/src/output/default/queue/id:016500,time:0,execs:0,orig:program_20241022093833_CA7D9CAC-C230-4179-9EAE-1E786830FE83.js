const v1 = new BigInt64Array();
const v4 = createGlobalObject().Float16Array;
try { v4.from(v1); } catch (e) {}
gc();
