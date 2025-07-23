const v1 = Int16Array.name;
const v3 = new Float32Array(v1, v1, v1);
const v4 = v3.reverse;
try { v4.call(v1); } catch (e) {}
gc();
