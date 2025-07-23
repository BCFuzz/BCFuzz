const v2 = new Int8Array(4096);
const v4 = new Int16Array();
try { v4.set(v2); } catch (e) {}
gc();
