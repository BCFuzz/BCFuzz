const v2 = new Int8Array(4096);
const v4 = new Float64Array();
try { v4.set(v2); } catch (e) {}
gc();
