const v3 = new Uint8ClampedArray(4294967296);
const t1 = v3.constructor;
const v6 = new t1(8);
v6.toSorted(gc);
gc();
