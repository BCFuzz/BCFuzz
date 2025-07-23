const o2 = {
    "maxByteLength": 1002,
};
const v4 = new SharedArrayBuffer(1002, o2);
new BigInt64Array(v4, v4, v4);
gc();
