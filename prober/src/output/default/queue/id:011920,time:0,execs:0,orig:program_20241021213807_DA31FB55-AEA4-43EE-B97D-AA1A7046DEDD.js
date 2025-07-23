const v1 = new SharedArrayBuffer();
let v2 = 31737;
v2--;
const v5 = new BigUint64Array();
const v6 = v5.constructor;
try { new v6(v1, v2); } catch (e) {}
gc();
