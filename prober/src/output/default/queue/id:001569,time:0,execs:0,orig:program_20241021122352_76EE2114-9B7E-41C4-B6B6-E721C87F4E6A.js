const o2 = {
    "maxByteLength": 1073741824,
};
const v4 = new SharedArrayBuffer(492, o2);
v4.byteLength;
gc();
