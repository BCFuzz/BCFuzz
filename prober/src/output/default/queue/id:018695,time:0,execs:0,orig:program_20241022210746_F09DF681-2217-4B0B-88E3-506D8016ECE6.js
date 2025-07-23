const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
const v3 = new Float64Array();
try { v3.set(v1, 6); } catch (e) {}
gc();
