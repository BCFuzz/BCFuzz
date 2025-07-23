const v2 = new Uint8Array(64);
const v4 = new Float64Array();
try { v4.set(v2); } catch (e) {}
gc();
