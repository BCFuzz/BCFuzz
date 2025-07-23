const o2 = {
    "maxByteLength": 2147483648,
};
const v4 = new ArrayBuffer(2812, o2);
const v6 = new Uint16Array(v4);
v6.byteOffset;
gc();
