const o2 = {
    "maxByteLength": 65535,
};
const v4 = new ArrayBuffer(19, o2);
v4.transferToFixedLength(65535, o2);
gc();
