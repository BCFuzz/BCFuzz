const o2 = {
    "maxByteLength": 1024,
};
const v4 = new SharedArrayBuffer(4, o2);
const v6 = new Int8Array(v4);
delete v6[6];
gc();
