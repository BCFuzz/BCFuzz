const v2 = new ArrayBuffer(512);
const v4 = new Uint8ClampedArray(v2);
v4.lastIndexOf(512, v2);
gc();
