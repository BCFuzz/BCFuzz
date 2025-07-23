const o2 = {
    "maxByteLength": 1997,
};
const v4 = new ArrayBuffer(4, o2);
const v6 = new Uint8ClampedArray(v4);
v6.indexOf(v6, 4);
gc();
