const o2 = {
    "maxByteLength": 2147483649,
};
const v4 = new SharedArrayBuffer(12, o2);
const v6 = new Uint8ClampedArray(v4);
v6.byteOffset += 1.2055895643347592e+308;
gc();
