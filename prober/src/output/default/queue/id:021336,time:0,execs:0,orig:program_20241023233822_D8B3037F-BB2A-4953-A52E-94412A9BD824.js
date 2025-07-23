const v2 = Array(4294967295);
try { v2.unshift(v2); } catch (e) {}
gc();
