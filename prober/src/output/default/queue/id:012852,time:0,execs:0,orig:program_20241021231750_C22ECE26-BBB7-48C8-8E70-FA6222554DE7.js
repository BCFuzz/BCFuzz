const v2 = Int32Array.length;
const v4 = new SharedArrayBuffer();
try { new Uint32Array(v4, v2); } catch (e) {}
gc();
