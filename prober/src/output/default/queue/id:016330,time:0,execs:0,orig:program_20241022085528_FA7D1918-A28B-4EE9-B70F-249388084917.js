const v2 = new SharedArrayBuffer();
const v4 = new DataView(v2);
try { v4.setBigInt64(v4, -1859454036n); } catch (e) {}
gc();
