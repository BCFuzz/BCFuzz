const o2 = {
    "maxByteLength": 9,
};
const v4 = new SharedArrayBuffer(9, o2);
const v6 = new BigInt64Array(v4);
v6[0] = v6;
gc();
