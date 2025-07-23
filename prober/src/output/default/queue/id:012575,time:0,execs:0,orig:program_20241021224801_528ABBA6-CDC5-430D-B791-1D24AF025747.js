const v0 = /ab\b\d\bcd/mdv;
const v1 = v0.exec(v0);
const v3 = new Float64Array();
const v4 = v3.subarray();
try { v4.set(v1); } catch (e) {}
gc();
