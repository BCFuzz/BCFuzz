const o3 = {
    "maxByteLength": 5,
};
const v5 = new ArrayBuffer(5, o3);
const v7 = new Int32Array(v5);
delete v7[Int8Array];
gc();
