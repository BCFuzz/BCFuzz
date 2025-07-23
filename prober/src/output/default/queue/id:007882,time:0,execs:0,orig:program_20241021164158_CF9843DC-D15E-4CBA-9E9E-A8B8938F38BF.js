const o2 = {
    "maxByteLength": 760,
};
const v4 = new ArrayBuffer(512, o2);
const v6 = new Uint8ClampedArray(v4);
v6.lastIndexOf(512, 760);
gc();
