const o2 = {
    "maxByteLength": 4294967295,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Uint8Array(v4);
Uint32Array.from(v6);
gc();
