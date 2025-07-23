const v2 = new Uint32Array(Uint8ClampedArray);
try { v2.sort(Uint32Array); } catch (e) {}
gc();
