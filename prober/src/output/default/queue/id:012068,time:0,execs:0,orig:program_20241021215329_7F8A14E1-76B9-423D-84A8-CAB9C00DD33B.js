const v3 = new SharedArrayBuffer(119);
const v5 = new BigInt64Array(119);
const v6 = v5.constructor;
try { new v6(v3, 119, 119); } catch (e) {}
gc();
