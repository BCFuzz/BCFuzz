const v2 = new SharedArrayBuffer();
v2.constructor = -4294967295n;
try { v2.slice(); } catch (e) {}
gc();
