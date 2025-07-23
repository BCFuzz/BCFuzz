const v2 = new Uint8ClampedArray(1784);
const v4 = new Int32Array();
try { v4.set(v2); } catch (e) {}
gc();
