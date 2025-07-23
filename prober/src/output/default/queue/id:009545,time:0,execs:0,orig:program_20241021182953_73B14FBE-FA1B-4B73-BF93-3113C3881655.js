const o2 = {
    "maxByteLength": 3676,
};
const v4 = new SharedArrayBuffer(3676, o2);
const v6 = new Int16Array(v4);
v6.copyWithin();
gc();
