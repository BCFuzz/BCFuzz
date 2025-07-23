const v1 = new SharedArrayBuffer();
const v4 = new BigUint64Array();
const v5 = v4.constructor;
try { new v5(v1, v1, 3190); } catch (e) {}
gc();
