const o2 = {
    "maxByteLength": 11,
};
const v4 = new SharedArrayBuffer(11, o2);
const v6 = new Int16Array(v4);
v6.sort();
gc();
