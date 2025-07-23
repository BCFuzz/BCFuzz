const v2 = new Int8Array(257);
const v4 = createGlobalObject();
const v5 = v4.Float16Array;
const v6 = new v5(v4, Int8Array, v5, v5);
const v7 = v6.subarray();
try { v7.set(v2); } catch (e) {}
gc();
