const o2 = {
    "maxByteLength": 6,
};
const v4 = new SharedArrayBuffer(6, o2);
const v6 = new BigUint64Array(v4);
v6.sort();
gc();
