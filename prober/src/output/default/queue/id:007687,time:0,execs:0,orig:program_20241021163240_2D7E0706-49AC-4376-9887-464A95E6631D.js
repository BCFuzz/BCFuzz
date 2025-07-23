const o2 = {
    "maxByteLength": 268435440,
};
const v4 = new ArrayBuffer(8, o2);
const v6 = new BigUint64Array(v4);
v6.indexOf();
gc();
