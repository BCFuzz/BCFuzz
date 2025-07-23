const v1 = new Uint8ClampedArray(Uint8ClampedArray);
const v3 = Int32Array.from(v1);
try { v3.set(undefined); } catch (e) {}
gc();
