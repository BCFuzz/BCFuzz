const o2 = {
    "maxByteLength": 4294967296,
};
const v4 = new SharedArrayBuffer(745, o2);
v4.maxByteLength;
gc();
