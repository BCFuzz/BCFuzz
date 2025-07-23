const v2 = new Float32Array(3000);
const v4 = new Int16Array();
try { v4.set(v2); } catch (e) {}
gc();
