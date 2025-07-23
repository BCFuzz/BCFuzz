const v2 = new Float64Array(1);
const v4 = new Int32Array();
try { v4.set(v2); } catch (e) {}
gc();
