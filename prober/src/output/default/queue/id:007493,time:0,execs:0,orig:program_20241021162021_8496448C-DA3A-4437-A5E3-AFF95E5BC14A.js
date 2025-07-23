const o2 = {
    "maxByteLength": 268435439,
};
const v4 = new ArrayBuffer(3449, o2);
const v6 = new Float32Array(v4);
v6.slice(268435439, 268435439);
gc();
