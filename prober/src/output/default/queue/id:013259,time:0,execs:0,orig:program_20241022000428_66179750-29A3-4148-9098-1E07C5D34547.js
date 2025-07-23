const o3 = {
    "maxByteLength": 12,
};
const v5 = new ArrayBuffer(5, o3);
const v6 = new Int8Array(v5);
const v7 = v6.subarray();
const o8 = {
    ...v7,
};
gc();
