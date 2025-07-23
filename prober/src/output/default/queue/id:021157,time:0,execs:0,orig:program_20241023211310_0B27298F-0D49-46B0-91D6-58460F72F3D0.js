const o2 = {
    "maxByteLength": 65535,
};
const v4 = new ArrayBuffer(4096, o2);
const v6 = new BigInt64Array(v4);
new BigUint64Array(v6);
gc();
