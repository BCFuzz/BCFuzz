const v3 = new Uint32Array();
try { v3.subarray(6, 127n); } catch (e) {}
gc();
