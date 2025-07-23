const o2 = {
    "maxByteLength": 3071283242,
};
const v4 = new SharedArrayBuffer(1024, o2);
v4.maxByteLength;
gc();
