const v3 = new Uint32Array(1073741824);
try { v3.sort(Uint16Array); } catch (e) {}
gc();
