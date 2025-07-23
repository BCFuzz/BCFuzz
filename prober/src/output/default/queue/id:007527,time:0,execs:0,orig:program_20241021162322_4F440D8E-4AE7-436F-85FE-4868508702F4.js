const v1 = new Int32Array(Int32Array);
const v3 = new Int8Array();
try { v3.set(v1); } catch (e) {}
gc();
