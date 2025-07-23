const v2 = new Float64Array();
const v4 = new Uint32Array(268435456);
try { v2.set(v4); } catch (e) {}
gc();
