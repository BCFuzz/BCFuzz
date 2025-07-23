const v2 = new Float64Array(5);
const v4 = new Int8Array();
try { v4.set(v2); } catch (e) {}
gc();
