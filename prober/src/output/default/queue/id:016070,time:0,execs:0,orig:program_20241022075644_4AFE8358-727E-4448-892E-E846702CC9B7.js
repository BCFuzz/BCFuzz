const v2 = new Int32Array(3683);
const v4 = new Float64Array();
const v5 = v4.subarray();
try { v5.set(v2); } catch (e) {}
gc();
