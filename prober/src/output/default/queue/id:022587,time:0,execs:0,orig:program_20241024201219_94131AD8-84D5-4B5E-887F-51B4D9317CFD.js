const o2 = {
    "maxByteLength": 2329388498,
};
const v4 = new ArrayBuffer(7, o2);
const v6 = new BigUint64Array(v4);
v6.subarray(7, 2329388498).sort();
gc();
