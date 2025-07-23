const o2 = {
    "maxByteLength": 268435440,
};
const v4 = new ArrayBuffer(237, o2);
new BigUint64Array(v4);
v4.transfer();
gc();
