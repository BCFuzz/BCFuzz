const v1 = new Uint32Array();
try { v1.toSorted(v1); } catch (e) {}
gc();
