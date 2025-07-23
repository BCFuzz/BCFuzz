const v1 = [Array];
const v3 = new Uint8ClampedArray();
const v5 = Int32Array.from(v3);
try { v5.set(v1); } catch (e) {}
gc();
