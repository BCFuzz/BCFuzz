const o2 = {
    "maxByteLength": 9,
};
const v4 = new SharedArrayBuffer(9, o2);
const v6 = new Int8Array(v4);
v6[7];
gc();
