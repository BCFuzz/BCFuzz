const v3 = new Uint32Array();
try { v3.copyWithin(-1, Uint32Array, 63288n); } catch (e) {}
gc();
