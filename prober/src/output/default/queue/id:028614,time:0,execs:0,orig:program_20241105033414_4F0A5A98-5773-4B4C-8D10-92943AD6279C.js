const v2 = new Float64Array();
const v4 = new Uint8ClampedArray(v2.buffer);
v4.set(v2);
gc();
