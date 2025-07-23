const v1 = new Int8Array();
const v2 = v1.subarray(Int8Array, Int8Array);
try { v2.with(); } catch (e) {}
gc();
