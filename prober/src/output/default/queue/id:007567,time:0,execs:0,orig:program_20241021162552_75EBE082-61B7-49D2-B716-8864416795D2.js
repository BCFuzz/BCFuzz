const v2 = 512 | 512;
const v4 = Array(512).join(v2);
try { v4.repeat(v2); } catch (e) {}
gc();
