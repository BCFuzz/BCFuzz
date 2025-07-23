const o2 = {
    "maxByteLength": 118,
};
const v4 = new SharedArrayBuffer(0, o2);
new Float32Array(v4);
gc();
