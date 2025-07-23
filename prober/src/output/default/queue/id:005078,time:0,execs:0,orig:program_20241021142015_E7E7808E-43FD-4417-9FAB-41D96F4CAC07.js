const o3 = {
    "maxByteLength": 1024,
};
const v5 = new ArrayBuffer(1024, o3);
const v7 = new Uint8ClampedArray(v5);
new Int16Array(v7);
gc();
