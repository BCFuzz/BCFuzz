const v1 = new Float64Array();
try { v1.set("prototype", 6); } catch (e) {}
gc();
