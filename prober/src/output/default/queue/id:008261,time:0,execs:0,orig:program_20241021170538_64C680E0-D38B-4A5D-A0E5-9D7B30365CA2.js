const o3 = {
    "maxByteLength": 15,
};
const v5 = new SharedArrayBuffer(1, o3);
const v7 = new Int16Array(v5);
new Float32Array(v7);
gc();
