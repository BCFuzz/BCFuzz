const o3 = {
    "maxByteLength": 12,
};
const v5 = new ArrayBuffer(5, o3);
const v6 = new Int8Array(v5);
v6.constructor = Int8Array;
v6.subarray(5);
gc();
