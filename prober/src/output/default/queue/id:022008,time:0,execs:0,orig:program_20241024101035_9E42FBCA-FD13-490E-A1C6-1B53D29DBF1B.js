const o3 = {
    "maxByteLength": 257,
};
const v5 = new ArrayBuffer(257, o3);
const v6 = new Int8Array(v5);
delete v6[120];
gc();
