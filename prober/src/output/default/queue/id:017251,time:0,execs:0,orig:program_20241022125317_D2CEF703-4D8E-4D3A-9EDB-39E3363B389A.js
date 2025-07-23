const o4 = {
    "maxByteLength": 12,
};
const v6 = new ArrayBuffer(5, o4);
const v7 = new Int8Array(v6);
new Uint32Array(v7);
gc();
