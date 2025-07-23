const v1 = new Map();
const v2 = v1.entries();
v1.clear();
new BigUint64Array(v2);
gc();
