const v2 = new Float64Array();
try { v2.subarray(Float64Array, -15n); } catch (e) {}
gc();
