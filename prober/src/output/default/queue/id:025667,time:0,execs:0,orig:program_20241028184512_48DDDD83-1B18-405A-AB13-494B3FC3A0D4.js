const v3 = new Float32Array(536870912);
try { v3.sort(Uint8ClampedArray); } catch (e) {}
gc();
