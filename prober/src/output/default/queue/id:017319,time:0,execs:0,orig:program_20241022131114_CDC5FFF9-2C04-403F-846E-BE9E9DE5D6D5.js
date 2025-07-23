const o2 = {
    "maxByteLength": 128,
};
const v4 = new ArrayBuffer(97, o2);
const v6 = new Float32Array(v4);
new Int16Array(v6);
gc();
