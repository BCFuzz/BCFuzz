const o2 = {
    "maxByteLength": 1953043059,
};
const v4 = new ArrayBuffer(7, o2);
const v6 = new Uint8Array(v4, Uint8Array, 7);
v6[1] = v6;
gc();
