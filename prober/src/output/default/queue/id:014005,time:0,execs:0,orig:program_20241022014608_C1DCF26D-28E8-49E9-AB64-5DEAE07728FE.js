const o3 = {
    "maxByteLength": 64,
};
const v5 = new ArrayBuffer(64, o3);
const v7 = new Float32Array(v5);
v7[4] = 36273;
gc();
