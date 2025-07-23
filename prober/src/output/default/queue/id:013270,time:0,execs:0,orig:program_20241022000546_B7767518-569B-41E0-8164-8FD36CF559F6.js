const o2 = {
    "maxByteLength": 4294967296,
};
const v4 = new ArrayBuffer(251, o2);
const v6 = new Int16Array(v4);
v6.byteLength;
gc();
