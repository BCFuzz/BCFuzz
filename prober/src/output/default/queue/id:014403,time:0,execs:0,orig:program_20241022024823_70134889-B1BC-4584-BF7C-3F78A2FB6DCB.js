const o3 = {
    "maxByteLength": 4096,
};
const v5 = new ArrayBuffer(4096, o3);
const v6 = new Float32Array(v5);
new Uint16Array(v6);
gc();
