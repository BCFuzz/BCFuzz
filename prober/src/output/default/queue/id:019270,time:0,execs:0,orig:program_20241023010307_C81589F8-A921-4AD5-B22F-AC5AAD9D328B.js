const o2 = {
    "maxByteLength": 4096,
};
const v4 = new ArrayBuffer(4, o2);
const v6 = new Int8Array(v4);
new Int32Array(v6);
gc();
