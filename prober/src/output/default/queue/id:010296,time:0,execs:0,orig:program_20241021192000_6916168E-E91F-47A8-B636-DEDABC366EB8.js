const o3 = {
    "maxByteLength": 8,
};
const v5 = new SharedArrayBuffer(5, o3);
const v7 = new Uint32Array(v5);
v7.byteOffset >>>= -14;
gc();
