const v2 = new Uint32Array(1);
const v4 = new Uint8ClampedArray(v2);
v4.toSorted();
gc();
