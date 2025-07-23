const v2 = new Uint8ClampedArray();
const v3 = v2.constructor;
v3.__proto__ = Float32Array;
const v4 = new v3();
v4.subarray();
gc();
