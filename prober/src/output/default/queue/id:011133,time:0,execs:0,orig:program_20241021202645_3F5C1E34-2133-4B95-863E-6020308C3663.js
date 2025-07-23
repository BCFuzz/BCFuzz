const o2 = {
    "maxByteLength": 194,
};
const v4 = new ArrayBuffer(194, o2);
const v6 = new Float64Array(v4);
v6.byteOffset;
gc();
