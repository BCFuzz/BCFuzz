const v1 = new BigInt64Array();
const v3 = new BigUint64Array(v1);
delete v1.length;
delete v3[3];
gc();
