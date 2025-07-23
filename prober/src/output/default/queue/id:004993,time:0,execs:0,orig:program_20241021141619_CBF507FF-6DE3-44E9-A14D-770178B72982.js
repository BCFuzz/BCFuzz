const o2 = {
    "maxByteLength": 1073741824,
};
const v4 = new ArrayBuffer(512, o2);
const v6 = new Uint8ClampedArray(v4);
v6[442] = v6;
gc();
