const o2 = {
    "maxByteLength": 256,
};
const v4 = new ArrayBuffer(5, o2);
new Uint8ClampedArray(v4);
gc();
