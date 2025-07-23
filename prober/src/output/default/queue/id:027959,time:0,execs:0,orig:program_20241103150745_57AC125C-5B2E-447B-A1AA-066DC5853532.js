const v2 = new Int32Array();
const v4 = new Uint8ClampedArray(v2.buffer);
v4.set(v2);
gc();
