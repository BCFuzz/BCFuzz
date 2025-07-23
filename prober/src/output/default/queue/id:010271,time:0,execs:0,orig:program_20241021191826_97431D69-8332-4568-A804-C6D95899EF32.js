const v2 = new Uint16Array();
try { v2.set(v2, -16); } catch (e) {}
gc();
