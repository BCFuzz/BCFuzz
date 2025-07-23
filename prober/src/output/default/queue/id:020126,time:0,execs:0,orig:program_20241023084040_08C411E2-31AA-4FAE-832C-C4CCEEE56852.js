const o2 = {
    "maxByteLength": 127,
};
const v4 = new ArrayBuffer(127, o2);
const v6 = new Int8Array(v4);
v6.sort();
gc();
