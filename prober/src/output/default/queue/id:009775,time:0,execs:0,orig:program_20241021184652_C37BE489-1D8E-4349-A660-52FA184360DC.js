const v2 = new Float64Array(4096);
const v4 = new Uint8Array();
const v5 = v4.copyWithin(4096, 4096, 4096);
try { v5.set(v2); } catch (e) {}
gc();
