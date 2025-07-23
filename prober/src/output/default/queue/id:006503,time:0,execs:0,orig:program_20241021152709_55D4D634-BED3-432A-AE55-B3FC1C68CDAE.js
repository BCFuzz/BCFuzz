const o2 = {
    "maxByteLength": 65535,
};
const v4 = new ArrayBuffer(19, o2);
new Float32Array(v4, ArrayBuffer, Float32Array);
gc();
