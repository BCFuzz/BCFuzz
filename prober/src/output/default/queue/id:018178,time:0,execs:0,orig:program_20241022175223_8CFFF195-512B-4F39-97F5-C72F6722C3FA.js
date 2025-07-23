const v2 = new Int16Array();
try { v2.with(Infinity); } catch (e) {}
gc();
