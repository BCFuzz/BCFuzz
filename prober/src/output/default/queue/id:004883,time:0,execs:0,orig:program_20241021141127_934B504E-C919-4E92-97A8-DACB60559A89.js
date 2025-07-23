const o2 = {
    "maxByteLength": 16,
};
const v4 = new ArrayBuffer(7, o2);
v4.transfer();
gc();
