const v2 = new Uint8ClampedArray();
const v4 = new Float64Array();
try { v2.set(v4, 1); } catch (e) {}
gc();
