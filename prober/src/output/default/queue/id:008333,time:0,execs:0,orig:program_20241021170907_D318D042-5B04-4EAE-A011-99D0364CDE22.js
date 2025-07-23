const v1 = new Uint16Array();
try { v1.with(16n); } catch (e) {}
gc();
