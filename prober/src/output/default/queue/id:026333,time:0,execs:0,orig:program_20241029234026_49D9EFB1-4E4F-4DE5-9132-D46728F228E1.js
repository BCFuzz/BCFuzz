const v1 = new Int16Array();
v1.buffer.transfer();
const v5 = new Float32Array();
try { v5.set(v1); } catch (e) {}
gc();
