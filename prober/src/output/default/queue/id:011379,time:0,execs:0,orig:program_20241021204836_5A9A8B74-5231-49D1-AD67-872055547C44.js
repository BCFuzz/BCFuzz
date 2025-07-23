const v2 = new Int16Array();
try { v2.subarray(Int16Array, 1073741825n); } catch (e) {}
gc();
