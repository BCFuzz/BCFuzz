const v2 = new Uint16Array();
v2.constructor = Array;
try { v2.subarray(Uint16Array); } catch (e) {}
gc();
