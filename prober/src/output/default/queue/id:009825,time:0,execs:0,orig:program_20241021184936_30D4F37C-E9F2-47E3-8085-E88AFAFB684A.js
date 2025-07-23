const o2 = {
    "maxByteLength": 23,
};
const v4 = new ArrayBuffer(23, o2);
v4.resize();
const v7 = new BigInt64Array(v4);
v7[1];
gc();
