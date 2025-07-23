const o3 = {
    "maxByteLength": 13,
};
const v5 = new SharedArrayBuffer(1, o3);
const v7 = new Int16Array(v5);
new Uint8ClampedArray(v7);
gc();
