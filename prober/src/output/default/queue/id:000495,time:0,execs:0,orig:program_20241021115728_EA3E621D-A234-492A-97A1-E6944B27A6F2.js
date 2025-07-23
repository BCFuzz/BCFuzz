const o2 = {
    "maxByteLength": 257,
};
const v4 = new SharedArrayBuffer(130, o2);
new BigUint64Array(v4);
gc();
