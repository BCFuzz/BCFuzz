const v1 = new Date();
const v2 = v1.toLocaleString;
try { v2(); } catch (e) {}
gc();
