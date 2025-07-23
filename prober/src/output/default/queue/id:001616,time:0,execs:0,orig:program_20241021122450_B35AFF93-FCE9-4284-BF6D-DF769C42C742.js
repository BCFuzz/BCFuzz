const v2 = new Uint32Array(Uint32Array, 1000000.0, Uint32Array);
try { v2.sort(1000000.0); } catch (e) {}
gc();
