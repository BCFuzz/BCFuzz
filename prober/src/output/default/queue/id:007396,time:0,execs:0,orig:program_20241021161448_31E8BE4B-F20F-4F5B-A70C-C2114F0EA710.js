const o2 = {
    "maxByteLength": 64,
};
const v4 = new ArrayBuffer(64, o2);
v4.resize();
const v7 = new Float32Array(v4);
v7[4] = ArrayBuffer;
gc();
