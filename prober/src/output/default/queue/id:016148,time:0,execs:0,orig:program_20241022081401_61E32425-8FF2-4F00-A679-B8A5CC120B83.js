const o2 = {
    "maxByteLength": 255,
};
const v4 = new SharedArrayBuffer(255, o2);
const v6 = new Int8Array(v4);
delete v6.byteLength;
gc();
