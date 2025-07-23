const o2 = {
    "maxByteLength": 10,
};
const v4 = new SharedArrayBuffer(7, o2);
const v6 = new Int32Array(v4);
const v7 = v6.copyWithin();
const t6 = v7.constructor;
new t6(v7);
gc();
