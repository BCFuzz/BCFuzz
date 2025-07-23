const v2 = new Float32Array();
try { v2.with(16n); } catch (e) {}
gc();
