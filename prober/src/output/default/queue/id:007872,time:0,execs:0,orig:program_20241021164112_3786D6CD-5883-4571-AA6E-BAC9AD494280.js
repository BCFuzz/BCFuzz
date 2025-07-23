const v2 = new Int16Array();
try { v2.copyWithin(-1073741824n); } catch (e) {}
gc();
