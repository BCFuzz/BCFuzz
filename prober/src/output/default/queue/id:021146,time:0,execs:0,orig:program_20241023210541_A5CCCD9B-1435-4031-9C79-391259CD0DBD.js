const o3 = {
    "maxByteLength": 4096,
};
const v5 = new ArrayBuffer(4096, o3);
const v7 = new Int8Array(v5);
new Float32Array(v7.subarray());
gc();
