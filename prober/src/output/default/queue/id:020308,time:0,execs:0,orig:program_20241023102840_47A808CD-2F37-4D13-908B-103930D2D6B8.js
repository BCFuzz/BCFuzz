const v2 = new Float64Array();
v2.constructor = "undefined";
try { v2.subarray(); } catch (e) {}
gc();
