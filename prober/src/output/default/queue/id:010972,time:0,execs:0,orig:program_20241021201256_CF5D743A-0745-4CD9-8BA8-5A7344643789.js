const v3 = NaN ^ (-8 | -8);
const v5 = new SharedArrayBuffer();
const v7 = new DataView(v5);
try { v7.setBigInt64(v3); } catch (e) {}
gc();
