const o2 = {
    "maxByteLength": 10000,
};
const v3 = new SharedArrayBuffer(SharedArrayBuffer, o2);
const v5 = new Uint32Array(v3);
v5[632];
gc();
