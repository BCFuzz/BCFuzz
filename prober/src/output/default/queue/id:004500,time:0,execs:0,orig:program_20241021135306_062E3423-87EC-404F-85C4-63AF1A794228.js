const o3 = {
    "maxByteLength": 65537,
};
const v5 = new ArrayBuffer(1175, o3);
const v7 = new BigInt64Array(v5);
v7 >>> 1;
gc();
