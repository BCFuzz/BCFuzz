const v2 = new Uint32Array(129);
const v4 = new SharedArrayBuffer();
try { new Uint16Array(v4, 129, v2); } catch (e) {}
gc();
