const o2 = {
    "maxByteLength": 256,
};
const v4 = new SharedArrayBuffer(256, o2);
const v6 = new DataView(v4);
v6.byteLength;
gc();
