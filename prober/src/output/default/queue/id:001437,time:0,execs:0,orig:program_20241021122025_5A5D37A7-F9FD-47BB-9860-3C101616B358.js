const v2 = new Int16Array();
try { v2.sort(129); } catch (e) {}
gc();
