const v3 = new Uint8ClampedArray(4294967296);
try { new Uint16Array(v3); } catch (e) {}
gc();
