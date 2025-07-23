const v2 = new Uint8Array(5);
const v4 = new Float32Array();
try { v4.set(v2); } catch (e) {}
gc();
