const v1 = new Int32Array();
let v2;
try { v2 = v1(Int32Array); } catch (e) {}
v1.join(v2);
gc();
