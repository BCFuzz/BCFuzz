const o2 = {
    "maxByteLength": 6,
};
const v4 = new ArrayBuffer(0, o2);
const v6 = new Uint8Array(v4);
new Uint32Array(v6);
gc();
