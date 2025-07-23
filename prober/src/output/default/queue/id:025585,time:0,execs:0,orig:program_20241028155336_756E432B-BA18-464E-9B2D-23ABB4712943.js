const v2 = new Map();
v2.set(BigUint64Array, BigUint64Array);
const v4 = v2.entries();
v4.next();
v2.clear();
new BigUint64Array(v4);
gc();
