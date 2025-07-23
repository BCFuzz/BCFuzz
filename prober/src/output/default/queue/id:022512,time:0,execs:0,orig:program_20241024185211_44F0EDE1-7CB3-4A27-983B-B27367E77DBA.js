const v1 = new Int32Array();
v1.constructor = 12201n;
try { v1.subarray(); } catch (e) {}
gc();
