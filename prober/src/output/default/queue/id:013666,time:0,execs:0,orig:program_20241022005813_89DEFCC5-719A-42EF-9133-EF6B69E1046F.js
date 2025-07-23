const o2 = {
    "maxByteLength": 10,
};
const v4 = new SharedArrayBuffer(10, o2);
const v6 = new Float32Array(v4);
delete v6.byteLength;
gc();
