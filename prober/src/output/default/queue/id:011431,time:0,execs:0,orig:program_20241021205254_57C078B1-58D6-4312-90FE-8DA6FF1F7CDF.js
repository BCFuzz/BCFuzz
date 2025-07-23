const v2 = new SharedArrayBuffer(512);
const v4 = new BigInt64Array(v2);
v4.sort();
gc();
