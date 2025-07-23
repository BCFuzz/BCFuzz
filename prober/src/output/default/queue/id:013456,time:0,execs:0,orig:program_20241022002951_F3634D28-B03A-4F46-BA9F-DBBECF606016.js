const o2 = {
    "maxByteLength": 9,
};
const v3 = new ArrayBuffer(9, o2);
const v5 = new BigInt64Array(v3);
v5.set(v5);
gc();
