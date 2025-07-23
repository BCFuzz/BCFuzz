const v2 = new Uint32Array(Uint32Array);
const v3 = v2.subarray();
v3.constructor = Uint8ClampedArray;
v3.slice();
gc();
