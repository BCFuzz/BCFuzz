const v3 = new Uint32Array(323);
try { v3.sort(Uint16Array); } catch (e) {}
gc();
