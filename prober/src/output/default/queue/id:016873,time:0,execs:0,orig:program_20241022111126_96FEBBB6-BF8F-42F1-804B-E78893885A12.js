const v2 = new SharedArrayBuffer();
const v4 = new DataView(v2);
try { v4.getBigInt64(v4, -1.7032420584709566e+307); } catch (e) {}
gc();
