const v2 = new ArrayBuffer(128);
const v4 = new Uint8ClampedArray(v2);
v4.lastIndexOf(128);
gc();
