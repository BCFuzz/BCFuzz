const o2 = {
    "maxByteLength": 268435456,
};
const v4 = new SharedArrayBuffer(10, o2);
const v6 = new Int8Array(v4);
v6.toReversed();
gc();
