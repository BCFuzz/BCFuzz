const v2 = new Int32Array();
try { v2.with(-1e-15); } catch (e) {}
gc();
