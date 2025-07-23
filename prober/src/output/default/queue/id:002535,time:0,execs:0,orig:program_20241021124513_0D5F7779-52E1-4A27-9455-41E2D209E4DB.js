const o2 = {
    "maxByteLength": 1401,
};
const v4 = new SharedArrayBuffer(1401, o2);
const v6 = new Uint32Array(v4);
delete v6.byteOffset;
gc();
