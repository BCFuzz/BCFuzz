const v2 = new Int32Array(512);
const v4 = new Uint8ClampedArray();
try { v4.set(v2); } catch (e) {}
gc();
