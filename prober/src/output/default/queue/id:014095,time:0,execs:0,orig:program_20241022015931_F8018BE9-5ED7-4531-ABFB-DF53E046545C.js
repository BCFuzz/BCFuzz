const v2 = new Float32Array(4096);
const v3 = new Float32Array();
try { v3.set(v2); } catch (e) {}
gc();
