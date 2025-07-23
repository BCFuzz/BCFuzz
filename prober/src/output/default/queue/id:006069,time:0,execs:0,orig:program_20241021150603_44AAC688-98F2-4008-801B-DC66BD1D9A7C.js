let v2;
try { v2 = Float32Array(); } catch (e) {}
const v3 = new Float32Array(1015);
v3.sort(v2);
gc();
