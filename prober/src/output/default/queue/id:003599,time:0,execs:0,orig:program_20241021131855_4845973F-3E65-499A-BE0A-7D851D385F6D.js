let v1;
try { v1 = undefined.has(); } catch (e) {}
const v3 = new Int8Array();
v3.slice(v1);
gc();
