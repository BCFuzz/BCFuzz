const o2 = {
    "maxByteLength": 4010739806,
};
const v4 = new SharedArrayBuffer(4096, o2);
const v6 = new BigUint64Array(v4, 4096, BigUint64Array);
v6.sort();
const v9 = new BigInt64Array();
v9.indexOf(o2, 4010739806);
gc();
