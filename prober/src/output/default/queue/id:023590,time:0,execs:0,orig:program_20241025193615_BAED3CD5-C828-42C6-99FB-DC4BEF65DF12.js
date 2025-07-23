const v2 = new Int32Array();
v2.constructor = 64;
try { v2.subarray(); } catch (e) {}
gc();
