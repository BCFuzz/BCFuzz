const v1 = new Int32Array();
const v2 = v1.subarray(Int32Array, v1);
try { v2.set(); } catch (e) {}
gc();
