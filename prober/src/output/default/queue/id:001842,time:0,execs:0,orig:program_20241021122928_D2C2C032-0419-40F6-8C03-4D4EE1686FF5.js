const v1 = new Int32Array();
let v2;
try { v2 = v1.sort(v1); } catch (e) {}
const v4 = new Uint32Array(v2, v2, v2);
v4.sort(v2);
gc();
