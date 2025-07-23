const o2 = {
    "maxByteLength": 65536,
};
const v4 = new ArrayBuffer(0, o2);
const v6 = new Uint8ClampedArray(v4);
v6.buffer;
gc();
