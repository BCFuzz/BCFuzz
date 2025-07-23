const v1 = new Map();
const v2 = v1.set;
try { v2(); } catch (e) {}
gc();
