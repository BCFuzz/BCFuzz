const v2 = new Float64Array();
try { v2.toSorted(1); } catch (e) {}
gc();
