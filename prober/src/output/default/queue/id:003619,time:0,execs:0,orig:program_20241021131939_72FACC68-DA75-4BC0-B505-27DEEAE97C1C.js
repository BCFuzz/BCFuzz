const v2 = new Uint16Array();
try { v2.set("c"); } catch (e) {}
gc();
