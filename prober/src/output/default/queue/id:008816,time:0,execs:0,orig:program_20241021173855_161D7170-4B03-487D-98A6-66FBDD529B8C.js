const v2 = new Uint8Array(268435456);
const v4 = new Uint32Array();
try { v4.set(v2); } catch (e) {}
gc();
