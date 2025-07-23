const o2 = {
    "maxByteLength": 257,
};
const v4 = new SharedArrayBuffer(130, o2);
const v6 = new BigUint64Array(v4);
v6[2];
gc();
