const v2 = new Float64Array([Infinity]);
try { v2.with(v2); } catch (e) {}
gc();
