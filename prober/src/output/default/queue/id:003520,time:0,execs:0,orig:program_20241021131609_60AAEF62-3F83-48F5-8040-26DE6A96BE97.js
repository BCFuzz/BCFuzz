const o4 = {
    "maxByteLength": 12,
};
const v6 = new ArrayBuffer(5, o4);
const v7 = new Int8Array(v6);
v7.subarray(1.7976931348623157e+308);
gc();
