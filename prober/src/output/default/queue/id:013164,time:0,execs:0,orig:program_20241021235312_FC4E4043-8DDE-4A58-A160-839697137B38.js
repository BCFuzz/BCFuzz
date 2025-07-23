const o3 = {
    "maxByteLength": 257,
};
const v4 = new SharedArrayBuffer(1, o3);
const v6 = new BigUint64Array(v4);
v6[2];
gc();
