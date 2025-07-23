const v2 = new Int32Array();
try { v2.set("symbol"); } catch (e) {}
gc();
