const o2 = {
    "maxByteLength": 1000,
};
const v4 = new SharedArrayBuffer(1000, o2);
const v6 = new Int16Array(v4);
v6.toSorted();
gc();
