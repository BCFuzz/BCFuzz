const o2 = {
    "maxByteLength": 23,
};
const v4 = new ArrayBuffer(23, o2);
const v6 = new BigInt64Array(v4);
v6.copyWithin();
gc();
