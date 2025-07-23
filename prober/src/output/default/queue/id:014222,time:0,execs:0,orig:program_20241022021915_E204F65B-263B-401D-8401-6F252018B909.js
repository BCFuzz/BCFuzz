const o2 = {
    "maxByteLength": 4036,
};
const v4 = new SharedArrayBuffer(8, o2);
const v6 = new BigUint64Array(v4);
v6.length;
gc();
