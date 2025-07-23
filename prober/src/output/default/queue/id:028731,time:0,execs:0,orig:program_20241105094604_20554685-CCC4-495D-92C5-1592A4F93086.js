const o2 = {
    "maxByteLength": 268435439,
};
const v4 = new ArrayBuffer(3449, o2);
const v6 = new BigInt64Array(v4);
v4.transfer();
v6.length;
gc();
