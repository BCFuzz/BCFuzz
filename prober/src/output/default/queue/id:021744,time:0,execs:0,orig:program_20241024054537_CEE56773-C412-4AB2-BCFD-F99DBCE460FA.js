const o2 = {
    "maxByteLength": 4010739806,
};
const v4 = new SharedArrayBuffer(4096, o2);
const v6 = new BigUint64Array(v4);
BigInt64Array.from(v6.sort());
gc();
