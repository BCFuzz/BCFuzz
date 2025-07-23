const o2 = {
    "maxByteLength": 105,
};
const v4 = new ArrayBuffer(13, o2);
const v6 = new Float64Array(v4);
v6.length |= 13;
gc();
