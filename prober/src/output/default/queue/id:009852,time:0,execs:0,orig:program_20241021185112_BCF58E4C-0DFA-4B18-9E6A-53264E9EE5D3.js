const v1 = new Int32Array(Int32Array);
const v2 = new Int32Array();
try { v2.set(v1); } catch (e) {}
gc();
