const v2 = new Uint8ClampedArray(4294967296);
try { v2.sort(Float32Array); } catch (e) {}
gc();
