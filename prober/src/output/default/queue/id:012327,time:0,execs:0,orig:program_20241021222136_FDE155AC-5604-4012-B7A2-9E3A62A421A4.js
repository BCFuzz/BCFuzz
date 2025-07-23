const v2 = new Uint8Array();
try { v2.set(v2, -2147483649); } catch (e) {}
gc();
