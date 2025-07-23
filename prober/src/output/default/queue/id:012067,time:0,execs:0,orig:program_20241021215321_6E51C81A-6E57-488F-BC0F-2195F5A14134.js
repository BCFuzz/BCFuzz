const v2 = Int32Array.length;
const v5 = new SharedArrayBuffer(3);
try { new Uint32Array(v5, v2); } catch (e) {}
gc();
