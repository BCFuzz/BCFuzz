const v1 = [[]];
const v4 = Array(4294967295);
try { v4.concat(v1); } catch (e) {}
gc();
