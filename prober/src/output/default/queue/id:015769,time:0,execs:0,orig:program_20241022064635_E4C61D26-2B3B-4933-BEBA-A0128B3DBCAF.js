const o2 = {
    "maxByteLength": 1723344706,
};
const v4 = new ArrayBuffer(8, o2);
const v6 = new BigInt64Array(v4);
delete v6[0];
gc();
