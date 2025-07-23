const v2 = new Uint32Array(Uint32Array, 1073741824n);
try { v2.fill(1073741824n); } catch (e) {}
gc();
