const o2 = {
    "maxByteLength": 99,
};
const v4 = new SharedArrayBuffer(9, o2);
const v6 = new BigUint64Array(v4);
v6.with(v6, v6);
gc();
