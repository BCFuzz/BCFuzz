const v1 = new BigInt64Array();
v1.subarray();
const v4 = new BigUint64Array(v1, BigUint64Array, BigUint64Array);
v4.subarray();
v1.set(v4);
gc();
