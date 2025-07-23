const v2 = new Float64Array(257);
const v4 = new Float32Array();
try { v4.set(v2); } catch (e) {}
gc();
