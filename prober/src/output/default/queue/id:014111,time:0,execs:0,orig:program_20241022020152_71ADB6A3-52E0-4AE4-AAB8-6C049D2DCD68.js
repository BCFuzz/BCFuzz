const v2 = new Int16Array(4096);
const v4 = new Float32Array();
try { v4.set(v2); } catch (e) {}
gc();
