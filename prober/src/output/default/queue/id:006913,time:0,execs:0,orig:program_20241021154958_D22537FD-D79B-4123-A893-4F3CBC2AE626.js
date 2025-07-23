const v2 = new Int16Array();
const v5 = new Uint8ClampedArray(Uint32Array);
v5.with(Uint8Array, v2);
gc();
