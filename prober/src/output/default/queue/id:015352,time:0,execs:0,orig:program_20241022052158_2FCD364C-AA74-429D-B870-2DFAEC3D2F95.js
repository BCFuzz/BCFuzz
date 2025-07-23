const v2 = new Uint8Array(129);
const v3 = v2.sort();
try { v3.__defineSetter__(13, Uint8Array); } catch (e) {}
gc();
