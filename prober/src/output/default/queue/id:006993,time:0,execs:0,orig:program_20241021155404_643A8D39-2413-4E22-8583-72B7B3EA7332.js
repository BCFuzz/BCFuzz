const v1 = [4096n];
try { Uint8ClampedArray.from(v1); } catch (e) {}
gc();
