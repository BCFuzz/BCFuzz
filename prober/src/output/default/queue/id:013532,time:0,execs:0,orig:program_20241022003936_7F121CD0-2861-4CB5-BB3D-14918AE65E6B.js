const o3 = {
    "maxByteLength": 16,
};
const v4 = new SharedArrayBuffer(12, o3);
const v6 = new BigInt64Array(v4);
v6.sort();
gc();
