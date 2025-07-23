const o2 = {
    "maxByteLength": 4096,
};
const v4 = new ArrayBuffer(4096, o2);
const v6 = new Int8Array(v4);
new Uint16Array(v6);
gc();
