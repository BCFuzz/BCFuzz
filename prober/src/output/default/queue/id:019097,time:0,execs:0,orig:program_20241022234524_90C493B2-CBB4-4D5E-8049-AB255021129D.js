const v2 = new Uint16Array();
v2.constructor = 12201n;
try { v2.subarray(); } catch (e) {}
gc();
