const v1 = Array();
const v2 = v1.constructor;
const v3 = v2(v1);
v3.push(v2);
try { new BigUint64Array(v3); } catch (e) {}
gc();
