const v3 = new Uint16Array();
try { v3.subarray(256, 127n); } catch (e) {}
gc();
