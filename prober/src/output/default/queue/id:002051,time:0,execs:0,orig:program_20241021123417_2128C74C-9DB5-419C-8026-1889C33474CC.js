const o2 = {
    "maxByteLength": 253,
};
const v4 = new SharedArrayBuffer(1, o2);
const v6 = new BigInt64Array(v4);
v6.sort(BigInt64Array);
gc();
