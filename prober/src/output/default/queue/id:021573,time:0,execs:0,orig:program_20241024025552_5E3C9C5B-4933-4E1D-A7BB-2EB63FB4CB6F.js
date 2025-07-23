const v3 = new SharedArrayBuffer();
const v5 = new DataView(v3);
try { v5.setBigInt64(v5, -1859454036n, 1073741823); } catch (e) {}
gc();
