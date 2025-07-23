const v2 = new BigInt64Array(16);
const v4 = createGlobalObject();
const v5 = v4.Float16Array;
const v6 = new v5(v5, v2, v5, v4);
try { v6.set(v2); } catch (e) {}
gc();
