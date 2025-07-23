const v2 = new Uint8ClampedArray(2345);
const v4 = new Uint32Array();
try { v4.set(v2); } catch (e) {}
gc();
