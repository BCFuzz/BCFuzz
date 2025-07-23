const v2 = new Uint8Array(976);
const v3 = new Uint8Array();
const v4 = v3.toReversed();
try { v4.set(v2); } catch (e) {}
gc();
