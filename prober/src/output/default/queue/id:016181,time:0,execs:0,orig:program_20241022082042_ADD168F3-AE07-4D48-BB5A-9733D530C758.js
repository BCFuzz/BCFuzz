const o3 = {
    "maxByteLength": 12,
};
const v5 = new ArrayBuffer(5, o3);
const v6 = new Int8Array(v5);
v6.subarray(12).reverse().byteLength;
gc();
