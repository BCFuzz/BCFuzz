const v2 = new Uint8Array("boolean", "boolean", Uint8Array);
const v3 = v2.slice(v2, v2);
try { v3.toSorted("boolean"); } catch (e) {}
gc();
