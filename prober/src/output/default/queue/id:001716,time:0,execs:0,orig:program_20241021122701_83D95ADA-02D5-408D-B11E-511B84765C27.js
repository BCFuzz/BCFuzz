const v2 = new Uint8ClampedArray(14);
try { v2.sort(Float32Array); } catch (e) {}
gc();
