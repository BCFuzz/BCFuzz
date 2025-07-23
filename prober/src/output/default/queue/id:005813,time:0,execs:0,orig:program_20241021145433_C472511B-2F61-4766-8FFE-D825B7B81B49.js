const o2 = {
    "maxByteLength": 12,
};
const v4 = new ArrayBuffer(5, o2);
v4.maxByteLength;
gc();
