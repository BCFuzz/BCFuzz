const v1 = new Uint16Array(Uint16Array, Uint16Array);
const v4 = v1 || Uint32Array(v1, v1, Uint16Array);
try { v4.set(); } catch (e) {}
gc();
