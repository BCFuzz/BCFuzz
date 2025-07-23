const v1 = new BigUint64Array();
const v2 = new BigUint64Array(v1, BigUint64Array);
let v3;
try { v3 = v1.toLocaleLowerCase(); } catch (e) {}
v2.join(v3);
gc();
