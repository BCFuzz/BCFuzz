const v1 = new Int32Array(Int32Array);
const v3 = new Uint8ClampedArray(v1, Uint8ClampedArray);
const v6 = new Uint16Array(1507);
const v7 = v3[9];
try { v1.set(v6, v7); } catch (e) {}
gc();
