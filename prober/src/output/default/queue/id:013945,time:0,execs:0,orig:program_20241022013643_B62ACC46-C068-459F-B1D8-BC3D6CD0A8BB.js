const v2 = new Int32Array(1024);
const v4 = new Float32Array();
try { v4.set(v2); } catch (e) {}
gc();
