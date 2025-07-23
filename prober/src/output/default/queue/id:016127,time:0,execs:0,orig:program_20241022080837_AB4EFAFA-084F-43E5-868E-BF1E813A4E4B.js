const o2 = {
    "maxByteLength": 4,
};
const v4 = new ArrayBuffer(4, o2);
const v6 = new BigUint64Array(v4);
v6.set(v6);
gc();
