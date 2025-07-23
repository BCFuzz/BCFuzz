const v2 = Array(4294967295);
try { v2.concat(4294967295); } catch (e) {}
gc();
