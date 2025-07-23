const v2 = new Uint32Array(7);
const v4 = new Uint8Array();
try { v4.set(v2); } catch (e) {}
gc();
