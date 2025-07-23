const o2 = {
    "maxByteLength": 64,
};
const v4 = new ArrayBuffer(64, o2);
const v6 = new Float32Array(v4);
v6.byteOffset;
gc();
