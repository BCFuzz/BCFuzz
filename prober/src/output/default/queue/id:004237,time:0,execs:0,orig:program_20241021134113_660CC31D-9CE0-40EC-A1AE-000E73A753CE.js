const o2 = {
    "maxByteLength": 9,
};
const v4 = new SharedArrayBuffer(9, o2);
const v6 = new BigInt64Array(v4);
const o7 = {
    ...v6,
    __proto__: v6,
};
gc();
