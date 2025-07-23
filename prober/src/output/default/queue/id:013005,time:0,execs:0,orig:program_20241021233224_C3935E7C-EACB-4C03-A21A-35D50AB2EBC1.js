const o2 = {
    "maxByteLength": 1024,
};
const v4 = new SharedArrayBuffer(4, o2);
const v6 = new Int32Array(v4);
v6.indexOf(o2, 4);
gc();
