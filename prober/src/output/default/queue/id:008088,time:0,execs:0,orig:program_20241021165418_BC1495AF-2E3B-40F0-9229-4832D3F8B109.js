const v2 = new Int32Array(1814);
const v4 = new Uint32Array();
try { v4.set(v2); } catch (e) {}
gc();
