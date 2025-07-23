const o2 = {
    "maxByteLength": 34,
};
const v4 = new ArrayBuffer(34, o2);
const v6 = new Int32Array(v4);
v6.buffer;
gc();
