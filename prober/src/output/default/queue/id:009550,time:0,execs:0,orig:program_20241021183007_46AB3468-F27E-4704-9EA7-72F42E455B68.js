const o3 = {
    "maxByteLength": 128,
};
const v5 = new SharedArrayBuffer(128, o3);
const v6 = new BigInt64Array(v5);
v6.reverse();
gc();
