let v1;
try { v1 = Int32Array(); } catch (e) {}
const v3 = new Uint32Array();
v3.toSorted(v1);
gc();
