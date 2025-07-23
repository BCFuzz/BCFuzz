const v3 = new SharedArrayBuffer();
const v5 = new DataView(v3);
try { v5.setBigInt64(v5, -1859454036n, -9007199254740990); } catch (e) {}
gc();
