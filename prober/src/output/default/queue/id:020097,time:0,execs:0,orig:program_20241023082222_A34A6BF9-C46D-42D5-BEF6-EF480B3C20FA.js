const v2 = new SharedArrayBuffer();
v2.constructor = -1000000000000.0;
try { v2.slice(); } catch (e) {}
gc();
