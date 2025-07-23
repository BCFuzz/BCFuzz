const v1 = new Uint32Array();
const v4 = new SharedArrayBuffer(Uint8ClampedArray, SharedArrayBuffer);
const v5 = new Uint8ClampedArray(v4);
v5.set(v1);
gc();
