const v2 = new Uint32Array();
v2.constructor = Array;
try { v2.slice(); } catch (e) {}
gc();
