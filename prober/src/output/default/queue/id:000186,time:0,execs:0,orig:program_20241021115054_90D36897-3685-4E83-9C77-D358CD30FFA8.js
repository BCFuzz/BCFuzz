const o2 = {
    "maxByteLength": 4096,
};
const v4 = new ArrayBuffer(4096, o2);
new Int8Array(v4);
gc();
