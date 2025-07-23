const o3 = {
    "maxByteLength": 65535,
};
const v5 = new ArrayBuffer(12, o3);
const v7 = new Uint32Array(v5);
v7.subarray(v7, Uint16Array);
gc();
