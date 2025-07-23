const v3 = new SharedArrayBuffer(512);
const v4 = new Uint8ClampedArray(v3);
v4.sort();
gc();
