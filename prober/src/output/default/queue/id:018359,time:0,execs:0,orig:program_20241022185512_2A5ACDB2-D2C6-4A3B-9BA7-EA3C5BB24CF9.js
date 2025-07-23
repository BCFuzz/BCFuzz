const v2 = new Uint8ClampedArray(4294967296);
try { new Float32Array(v2); } catch (e) {}
gc();
