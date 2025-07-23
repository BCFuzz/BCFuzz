const v2 = new SharedArrayBuffer();
const v5 = new BigUint64Array();
const v6 = v5.constructor;
try { new v6(v2, 512, 33096n); } catch (e) {}
gc();
