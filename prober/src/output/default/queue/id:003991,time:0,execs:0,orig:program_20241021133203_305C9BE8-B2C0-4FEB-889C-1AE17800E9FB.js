const o2 = {
    "maxByteLength": 16,
};
const v4 = new ArrayBuffer(2, o2);
const v6 = new Uint8ClampedArray(v4);
const o7 = {
    [v6]: Uint8ClampedArray,
};
gc();
