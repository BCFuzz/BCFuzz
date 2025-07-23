const v1 = new Uint8ClampedArray();
try { v1.with(Uint8ClampedArray, Uint8ClampedArray); } catch (e) {}
gc();
