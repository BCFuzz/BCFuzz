const o2 = {
    "maxByteLength": 105,
};
const v4 = new ArrayBuffer(0, o2);
const v6 = new Int16Array(v4);
v6.toReversed();
gc();
