const v2 = new Int8Array(4054);
const v3 = new Int8Array();
try { v3.set(v2); } catch (e) {}
gc();
