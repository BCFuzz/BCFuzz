const v2 = new Uint32Array(1563);
const v4 = new Uint8ClampedArray();
const v5 = v4.filter(Uint32Array);
try { v5.set(v2); } catch (e) {}
gc();
