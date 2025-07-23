const o2 = {
    "maxByteLength": 10,
};
const v4 = new SharedArrayBuffer(7, o2);
const v6 = new Int32Array(v4);
v6.copyWithin();
gc();
