const v3 = new Float32Array();
try { v3.with(41021, -268435456n); } catch (e) {}
gc();
