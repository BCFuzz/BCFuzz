const o2 = {
    "maxByteLength": 256,
};
const v4 = new ArrayBuffer(256, o2);
const v6 = new Uint8ClampedArray(v4);
v6.toSorted();
gc();
