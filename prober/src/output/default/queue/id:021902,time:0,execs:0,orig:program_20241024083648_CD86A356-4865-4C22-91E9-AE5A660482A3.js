const v2 = new Int16Array();
const v3 = v2.with;
try { v3.call(65537n); } catch (e) {}
gc();
