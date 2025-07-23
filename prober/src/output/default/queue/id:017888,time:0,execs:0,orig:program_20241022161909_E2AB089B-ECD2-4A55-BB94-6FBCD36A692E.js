const v2 = new Int8Array(1000);
const v4 = new Int32Array();
try { v4.set(v2); } catch (e) {}
gc();
