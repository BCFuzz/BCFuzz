const v2 = NaN ^ 63289;
const v5 = new SharedArrayBuffer();
const v7 = new DataView(v5);
try { v7.setBigInt64(v2, WeakMap); } catch (e) {}
gc();
