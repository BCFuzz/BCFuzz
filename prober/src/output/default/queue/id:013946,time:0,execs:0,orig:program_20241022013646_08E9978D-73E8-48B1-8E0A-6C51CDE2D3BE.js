const v2 = new Uint8ClampedArray();
const v4 = new Float32Array(v2, Float32Array);
v2.fill("getOwnPropertyNames", v4, Uint8ClampedArray);
gc();
