const o3 = {
    "maxByteLength": 4096,
};
const v5 = new ArrayBuffer(4096, o3);
const v6 = new Float32Array(v5);
v6.set(v6);
gc();
