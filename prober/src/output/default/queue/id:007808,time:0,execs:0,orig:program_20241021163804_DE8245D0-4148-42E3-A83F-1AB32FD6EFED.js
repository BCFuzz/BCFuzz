const v2 = new Float32Array(536870912);
const v4 = new Uint32Array();
try { v4.reduce(v2); } catch (e) {}
gc();
