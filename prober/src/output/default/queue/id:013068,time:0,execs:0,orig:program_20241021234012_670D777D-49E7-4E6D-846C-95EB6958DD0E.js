const v3 = new ArrayBuffer(512);
const v5 = new Uint8ClampedArray(v3);
v5.lastIndexOf(512, -4294967296);
gc();
