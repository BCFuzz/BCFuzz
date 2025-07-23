const v2 = new Int16Array(2);
const v3 = v2 && v2;
const v5 = new Uint32Array();
try { v5.set(v3); } catch (e) {}
gc();
