const v2 = new Float64Array();
try { v2.set(Float64Array, -15n); } catch (e) {}
gc();
