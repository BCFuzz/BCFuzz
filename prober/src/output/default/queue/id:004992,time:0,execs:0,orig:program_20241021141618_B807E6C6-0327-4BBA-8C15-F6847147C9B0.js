const v1 = String(String);
const v2 = v1.isWellFormed;
try { v2(v1, v2, v2, v2); } catch (e) {}
gc();
