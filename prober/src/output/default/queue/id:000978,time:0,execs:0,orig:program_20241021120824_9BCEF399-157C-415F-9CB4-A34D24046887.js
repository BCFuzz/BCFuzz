const o2 = {
    "maxByteLength": 141,
};
const v4 = new SharedArrayBuffer(141, o2);
new Int16Array(v4);
gc();
