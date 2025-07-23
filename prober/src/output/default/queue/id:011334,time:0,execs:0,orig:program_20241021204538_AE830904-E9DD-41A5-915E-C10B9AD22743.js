const v2 = new Int32Array(DataView);
const v3 = v2.toSorted();
const v5 = new Uint16Array();
try { v5.set(v3); } catch (e) {}
gc();
