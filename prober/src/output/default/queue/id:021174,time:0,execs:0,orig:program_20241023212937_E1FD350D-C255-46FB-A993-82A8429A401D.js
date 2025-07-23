const v1 = new Uint8ClampedArray(Uint8ClampedArray, Uint8ClampedArray, Uint8ClampedArray);
const o4 = {
    "maxByteLength": 16,
};
const v6 = new ArrayBuffer(16, o4);
const v8 = new Uint32Array(v6, Uint32Array, v1);
delete v8[6];
gc();
