let v2 = new Uint8ClampedArray(14);
const v3 = new Uint8ClampedArray(v2, 14);
--v2;
v3[v2] = Math.log(!v2);
gc();
