const o2 = {
    "maxByteLength": 128,
};
const v3 = new ArrayBuffer(128, o2);
const v5 = new Int8Array(v3);
new Uint8ClampedArray(v5.subarray());
gc();
