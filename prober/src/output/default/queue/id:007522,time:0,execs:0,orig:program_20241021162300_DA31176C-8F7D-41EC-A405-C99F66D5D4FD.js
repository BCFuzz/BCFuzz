const v2 = new Uint8Array(976);
const v4 = new Int32Array();
const v5 = v4.toReversed();
try { v5.set(v2); } catch (e) {}
gc();
