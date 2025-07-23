const v2 = new Int8Array(1965);
const v4 = new Float32Array();
try { v4.set(v2); } catch (e) {}
gc();
