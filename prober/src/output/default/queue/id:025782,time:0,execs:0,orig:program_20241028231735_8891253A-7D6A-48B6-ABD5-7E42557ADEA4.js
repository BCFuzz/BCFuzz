const v3 = new Uint8ClampedArray(4294967296);
try { Uint16Array.from(v3); } catch (e) {}
gc();
