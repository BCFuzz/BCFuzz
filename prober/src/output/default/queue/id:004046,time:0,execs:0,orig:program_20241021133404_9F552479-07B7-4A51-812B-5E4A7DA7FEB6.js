const v2 = new Float64Array();
try { v2.with(8, 8); } catch (e) {}
gc();
