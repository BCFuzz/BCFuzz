const o2 = {
    "maxByteLength": 255,
};
const v4 = new SharedArrayBuffer(0, o2);
const v6 = new Uint16Array(v4);
v6.toSorted();
gc();
