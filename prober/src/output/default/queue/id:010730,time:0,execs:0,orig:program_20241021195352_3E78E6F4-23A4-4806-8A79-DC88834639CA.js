const o2 = {
    "maxByteLength": 257,
};
const v4 = new ArrayBuffer(257, o2);
const v6 = new Float64Array(v4);
delete v6[120];
gc();
