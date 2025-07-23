const v2 = new Float32Array(536870912);
const v4 = new Uint32Array(536870912, 536870912);
try { v4.copyWithin(v2); } catch (e) {}
gc();
