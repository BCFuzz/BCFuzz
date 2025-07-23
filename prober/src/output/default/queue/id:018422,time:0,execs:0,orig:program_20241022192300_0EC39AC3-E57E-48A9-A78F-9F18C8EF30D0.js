const v2 = new SharedArrayBuffer();
const v3 = new Uint8ClampedArray(v2);
v3.sort();
gc();
