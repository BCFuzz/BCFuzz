const v3 = new ArrayBuffer(4);
const v5 = new Uint8ClampedArray(v3);
v5.indexOf(v5, -4294967295);
gc();
